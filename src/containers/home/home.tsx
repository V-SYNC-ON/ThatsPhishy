import Navbar from "../../components/navbar/navbar";
import { HomeContainer, HomeResult } from "./home.styles";
import Predict from "../../components/predict/predict";
import Result from "../../components/result/result";
import { useRef } from "react";
import HowTo from "../../components/howto/howto";
import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../../context/global.context";

export default function Home() {

    const resultRef = useRef<HTMLDivElement | null>(null)
    const { prediction } = useGlobalContext()

    const scrollToResult = () => {
        if (!resultRef.current) return

        setTimeout(() => {
            const yCoordinate = (resultRef.current?.getBoundingClientRect()?.top ?? 0) + window.scrollY
            const yOffset = -100
            window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
        }, 1000)
    }


    return (
        <HomeContainer>
            <Navbar />
            <Predict 
                onPredict={scrollToResult}
            />
            <div ref={resultRef}>
                <AnimatePresence>
                    {
                        prediction !== null && (
                            <HomeResult
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1  }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Result/>
                            </HomeResult>
                        )
                    }
                </AnimatePresence>
            </div>
            <HowTo />
        </HomeContainer>
    )
}