import Select from 'react-select'
import { NavbarContainer, NavbarLogo, NavbarMenu } from "./navbar.styles";

import logo from '../../assets/logo.svg'
import logo_mobile from '../../assets/logo-mobile.svg'

import github from '../../assets/icons/github.svg'
import discord from '../../assets/icons/discord.svg'
import { useState } from 'react';
import { useLanguageContext } from '../../context/language.context';

interface LanguageOption {
    value: string,
    label: string
}

export default function Navbar() {

    const { language, setLanguage } = useLanguageContext()

    const options: LanguageOption[] = [
        { value: 'english', label: 'English' },
        { value: 'hindi', label: 'हिन्दी' },
        { value: 'tamil', label: 'தமிழ்' },
        { value: 'telugu', label: 'తెలుగు' },
        { value: 'korean', label: '한국어' },
        { value: 'japanese', label: '日本語' },
    ]

    const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption | null>(
        options.find(option => option.value === language) || null
    )

    const handleLanguageChange = (selectedOption: LanguageOption | null) => {
        setSelectedLanguage(selectedOption)
        setLanguage!(selectedOption?.value || 'english')
        localStorage.setItem('language', selectedOption?.value || 'english')
    }

    return (
        <NavbarContainer>
            <NavbarLogo>
                <img
                    src={logo}
                    className='logo__desktop'
                    alt="ThatsPhishy logo"
                />
                <img
                    src={logo_mobile}
                    className='logo__mobile'
                    alt="ThatsPhishy logo"
                />
            </NavbarLogo>
            <NavbarMenu>
                <a 
                    href="https://github.com/V-SYNC-ON"
                    target="_blank"
                >
                    <img 
                        src={github} 
                        alt="GitHub logo"
                    />
                    <p>GitHub</p>
                </a>
                <a 
                    href="https://discord.gg/SfvRPCqV"
                    target="_blank"
                >
                    <img
                        src={discord}
                        alt="Discord logo"
                    />
                    <p>Discord</p>
                </a>
                <Select 
                    value={selectedLanguage}
                    options={options}
                    onChange={handleLanguageChange}
                    isSearchable={false}
                />
            </NavbarMenu>
        </NavbarContainer>
    )

}