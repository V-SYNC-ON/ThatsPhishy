import Home from "./containers/home/home";

import { useState } from "react";
import { GlobalContext, PredictionResult } from "./context/global.context";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

    const [prediction, setPrediction] = useState<null | PredictionResult>(null)
    
    return (
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
    )
}