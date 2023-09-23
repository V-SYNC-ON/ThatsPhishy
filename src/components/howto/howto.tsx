import { TransResource, useLanguageContext } from "../../context/language.context";
import { HowToContainer, HowToContent, HowToDesc, HowToTitle } from "./howto.styles";

export default function HowTo() {

    const { language } = useLanguageContext()

    return (
        <HowToContainer>
            <HowToContent>
                <HowToTitle>{TransResource[language].howToTitle}</HowToTitle>
                <HowToDesc>{TransResource[language].howToDesc}</HowToDesc>
            </HowToContent>
        </HowToContainer>
    )
}