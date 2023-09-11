import { Dispatch, SetStateAction, createContext, useContext } from "react"

export interface PredictionResult {
    description: string,
    domain: string,
    prediction: number,
    status: 'Safe' | 'Not Recommended' | 'Risky'
}

interface GlobalContextProps {
    prediction: null | PredictionResult,
    setPrediction?: Dispatch<SetStateAction<null | PredictionResult>>
}

const defaultValue = {
    prediction: null
}

export const GlobalContext = createContext<GlobalContextProps>(defaultValue)

export const useGlobalContext = () => useContext(GlobalContext)