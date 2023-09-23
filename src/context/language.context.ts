import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface LanguageContextProps {
    language: string,
    setLanguage?: Dispatch<SetStateAction<string>>
}

const defaultValue: LanguageContextProps = {
    language: "English"
}

export const LanguageContext = createContext<LanguageContextProps>(defaultValue)

export const useLanguageContext = () => useContext<LanguageContextProps>(LanguageContext)

interface LanguageData {
    desc: string,
    find: string,
    placeholder: string,
    howToTitle: string,
    howToDesc: string,
    checkComplete: string
    resultParams: Array<string>
}

export const TransResource: Record<string, LanguageData> = {
    "English": {
        desc: "Detect Phishing Websites Instantly ⚡️",
        placeholder: "Enter website URL",
        find: "Catch Phish 🔍",
        howToTitle: "How do we Catch Phish?",
        howToDesc: "ThatsPhishy employs state-of-the-art technology and advanced algorithms to meticulously scan websites, ensuring your online safety. Our mission is to provide you with a secure browsing experience, free from phishing threats. Trust ThatsPhishy to keep you protected while you explore the web.",
        checkComplete: "Phishing Check Complete ⚡️",
        resultParams: ["Website Name", "Category", "Description"]
    },
    "Tamil": {
        desc: "ஃபிஷிங் இணையதளங்களை உடனடியாகக் கண்டறியவும் ⚡️",
        placeholder: "இணையதளத்தை உள்ளிடவும்",
        find: "கெட் ஃபிஷ் 🔍",
        howToTitle: "எப்படி ஃபிஷ் கெட்டது?",
        howToDesc: "ThatsPhishy நாங்கள் உலகின் முதல் ஃபிஷிங் வலைத்தளமாக இருக்கிறோம். எங்கள் நோக்கம் உங்களுக்கு ஒரு பாதுகாப்பான இணைய அனுபவத்தை வழங்குகிறது, ஃபிஷிங் ஆபத்தில் இல்லாமல். வலையத்தை ஆராய்வதற்கு நீங்கள் ThatsPhishy என்ற வாரந்தோறும் நம்புகிறோம்.",
        checkComplete: "ஃபிஷிங் சோதனை முடிந்தது ⚡️",
        resultParams: ["இணையதளத்தின் பெயர்", "வகை", "விளக்கம்"]
    },
    "Hindi": {
        desc: "फिशिंग वेबसाइट को तुरंत पता लगाएं ⚡️",
        placeholder: "वेबसाइट यूआरएल दर्ज करें",
        find: "फिशिंग को पकड़ें 🔍",
        howToTitle: "हम फिशिंग को कैसे पकड़ते हैं?",
        howToDesc: "थैट्सफिशी विश्व की पहली फिशिंग वेबसाइट है। हमारा मिशन आपको एक सुरक्षित ब्राउज़िंग अनुभव प्रदान करना है, जो फिशिंग खतरों से मुक्त है। वेब की खोज करते समय आपको सुरक्षित रखने के लिए थैट्सफिशी पर भरोसा करें।",
        checkComplete: "फ़िशिंग जाँच पूर्ण ⚡️",
        resultParams: ["वेबसाइट का नाम", "श्रेणी", "विवरण"]
    },
    "Telugu": {
        desc: "ఫిషింగ్ వెబ్‌సైట్‌ను త్వరలో కనుగొనండి ⚡️",
        placeholder: "వెబ్‌సైట్ యుఆర్ఎల్‌ను నమోదు చేయండి",
        find: "ఫిషింగ్ ని పట్టించండి 🔍",
        howToTitle: "మేము ఫిషింగ్ ని ఎలా పట్టించుకున్నామో తెలుసా?",
        howToDesc: "థాట్స్‌ఫిషీ ప్రపంచంలో మొదటి ఫిషింగ్ వెబ్‌సైట్‌గా ఉంది. మా మిషన్ మీకు ఫిషింగ్ హానిలో ఉన్న ఒక భద్ర బ్రౌజింగ్ అనుభవం అందించడం కోసం ఉండాలి. వెబ్‌ను అన్వేషించడంలో మీకు భద్రతను నమ్మించడానికి థాట్స్‌ఫిషీని నమ్మండి",
        checkComplete: "ఫిషింగ్ తనిఖీ పూర్తయింది ⚡️",
        resultParams: ["వెబ్‌సైట్ పేరు", "వర్గం", "వివరణ"]
    },
    "Korean": {
        desc: "피싱 웹 사이트를 즉시 감지하십시오. ⚡️",
        placeholder: "웹 사이트 URL 입력",
        find: "피싱을 잡아라 🔍",
        howToTitle: "우리는 어떻게 피싱을 잡습니까?",
        howToDesc: "ThatsPhishy는 최첨단 기술과 고급 알고리즘을 사용하여 웹 사이트를 세심하게 스캔하여 온라인 안전을 보장합니다. 웹을 탐색하는 동안 피싱 위협으로부터 안전한 브라우징 경험을 제공하는 것이 우리의 미션입니다. 웹을 탐색하는 동안 ThatsPhishy를 신뢰하십시오.",
        checkComplete: "피싱체크 완료 ⚡️",
        resultParams: ["웹 사이트 이름", "범주", "설명"]
    },
    "Japanese": {
        desc: "フィッシングウェブサイトを即座に検出します。 ⚡️",
        placeholder: "ウェブサイトのURLを入力してください",
        find: "フィッシングをキャッチ 🔍",
        howToTitle: "私たちはどのようにフィッシングをキャッチしますか？",
        howToDesc: "ThatsPhishyは、最先端の技術と高度なアルゴリズムを使用して、ウェブサイトを細心の注意を払ってスキャンし、オンラインの安全性を確保します。 ウェブを探索する間、フィッシングの脅威から安全なブラウジング体験を提供することが私たちのミッションです。 ウェブを探索する間、ThatsPhishyを信頼してください。",
        checkComplete: "フィッシングチェック完了 ⚡️",
        resultParams: ["ウェブサイト名", "カテゴリー", "説明"]
    }
}
