import { useState } from "react";
import { PredictContainer, PredictContent, PredictMap } from "./predict.styles";

import map from '../../assets/map.svg'
import { toast } from "react-toastify";
import axios from "axios";
import { useGlobalContext } from "../../context/global.context";
import { TransResource, useLanguageContext } from "../../context/language.context";

export default function Predict({ onPredict }: { onPredict: () => void }) {

    const [loading, setLoading] = useState<boolean>(false)
    const [url, setUrl] = useState<string>("")

    const { setPrediction } = useGlobalContext()
    const { language } = useLanguageContext()

    const handlePrediction = () => {

        setPrediction!(null)
        setLoading(true)

        if (url === "") {
            toast.error('Please enter a URL')
            setLoading(false)
            return
        }

        const toastID = toast.loading('Analyzing URL', {
            progress: 0.3,
        })  

        axios.post(import.meta.env.VITE_BASE_API + '/predict', {
            url,
            language: language
        })
        .then((res) => {
            setPrediction!(res.data)
            toast.update(toastID, {
                render: 'Analysis Complete!',
                type: 'success',
                isLoading: false,
                progress: 0.99
            })
            onPredict()
        })
        .catch((err) => {
            toast.update(toastID, {
                render: err.response?.data?.error || 'URL Analysis Failed',
                type: 'error',
                isLoading: false,
                progress: 0.6
            })
        })
        .finally(() => {
            setTimeout(() => {
                toast.update(toastID, {
                    progress: 1
                })
            }, 5000)
        })

        setLoading(false)

    }

        

    return (
        <PredictContainer>
            <PredictContent>
                <h1>{TransResource[language].desc}</h1>
                <input 
                    type="text"
                    placeholder={TransResource[language].placeholder}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <button onClick={loading? () => {}: handlePrediction}>{TransResource[language].find}</button>
            </PredictContent>
            <PredictMap 
                src={map}
                alt="World Map" 
            />
        </PredictContainer>
    )
}