import { useGlobalContext } from "../../context/global.context";
import { ResultContainer, ResultDescription, ResultGauge, ResultPercent, ResultStats, ResultTitle } from "./result.styles";

import safe from '../../assets/gauge/80.svg'
import not_recommended from '../../assets/gauge/40.svg'
import risky from '../../assets/gauge/20.svg'

export default function Result() {

    const { prediction } = useGlobalContext()

    return (
        <ResultContainer>
            <ResultDescription>
                <ResultTitle>Phishing Check Complete ⚡️</ResultTitle>
                <ResultPercent>{prediction?.prediction}/100</ResultPercent>
                <ResultStats>
                    <p><span>Website Name :</span> {prediction?.domain}</p>
                    <p>
                        <span>Category : </span>
                        <span 
                            className={
                                prediction?.status === 'Not Recommended' 
                                ? 'NotRecommended' 
                                : prediction?.status
                            }
                        >{prediction?.status}
                        </span>
                    </p>
                    <p><span>Description :</span><br></br><br></br>{prediction?.description}</p>
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