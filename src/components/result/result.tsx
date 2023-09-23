import { useGlobalContext } from "../../context/global.context";
import { ResultContainer, ResultDescription, ResultGauge, ResultPercent, ResultStats, ResultTitle } from "./result.styles";

import safe from '../../assets/gauge/80.svg'
import not_recommended from '../../assets/gauge/40.svg'
import risky from '../../assets/gauge/20.svg'
import { TransResource, useLanguageContext } from "../../context/language.context";

export default function Result() {

    const { prediction } = useGlobalContext()
    const { language } = useLanguageContext()

    return (
        <ResultContainer>
            <ResultDescription>
                <ResultTitle>{TransResource[language].checkComplete}</ResultTitle>
                <ResultPercent>{prediction?.prediction}/100</ResultPercent>
                <ResultStats>
                    <p><span>{TransResource[language].resultParams[0]} : </span> {prediction?.domain}</p>
                    <p>
                        <span>{TransResource[language].resultParams[1]} : </span>
                        <span 
                            className={
                                prediction?.status === 'Not Recommended' 
                                ? 'NotRecommended' 
                                : prediction?.status
                            }
                        >{prediction?.status}
                        </span>
                    </p>
                    <p><span>{TransResource[language].resultParams[2]} :</span><br></br><br></br>{prediction?.description}</p>
                </ResultStats>
            </ResultDescription>
            <ResultGauge>
                <img 
                    src={
                        prediction?.status === 'Safe' ?
                        safe :
                        prediction?.status === 'Not Recommended' ?
                        not_recommended :
                        risky
                    }
                    alt="Percentage Gauge"
                />
            </ResultGauge>
        </ResultContainer>
    )

}