import { NavbarContainer, NavbarLogo, NavbarMenu } from "./navbar.styles";

import logo from '../../assets/logo.svg'

import github from '../../assets/icons/github.svg'
import discord from '../../assets/icons/discord.svg'

export default function Navbar() {

    return (
        <NavbarContainer>
            <NavbarLogo>
                <img
                    src={logo}
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
            </NavbarMenu>
        </NavbarContainer>
    )

}