import Home from "./containers/home/home";

import { useEffect, useState } from "react";
import { GlobalContext, PredictionResult } from "./context/global.context";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LanguageContext } from "./context/language.context";

export default function App() {

    const [prediction, setPrediction] = useState<null | PredictionResult>(null)
    const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'English')

    useEffect(() => {
        setPrediction(null)
    }, [language])
    
    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage
            }}
        >
            <GlobalContext.Provider
                value={{
                    prediction,
                    setPrediction
                }}
            >
                <Home />
                <ToastContainer 
                    position="bottom-right"
                />
            </GlobalContext.Provider>
        </LanguageContext.Provider>
    )
}