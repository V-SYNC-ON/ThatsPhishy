import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 10%;
    height: 3rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: Oxanium, sans-serif;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const NavbarLogo = styled.div`
    height: 1.5rem;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        pointer-events: none;
    }
`

export const NavbarMenu = styled.div`
    display: flex;
    gap: 3rem;

    a {
        text-decoration: none;
        color: black;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    img {
        height: 2rem;
        width: 2rem;
        object-fit: contain;
        pointer-events: none;
    }

    p {
        font-size: 1em;
    }

    @media (max-width: 990px) {
        gap: 2rem;

        p {
            display: none;
        }
    }
`