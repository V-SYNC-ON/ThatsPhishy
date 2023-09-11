import styled from "styled-components";

export const HowToContainer = styled.div`
    width: 100%;
    margin-bottom: 5rem;
    background-color: #FCFAFF;
`

export const HowToContent = styled.div`
    width: 80%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    box-sizing: border-box;

    @media only screen and (max-width: 990px) {
        padding: 1rem;
    }
`

export const HowToTitle = styled.p`
    font-size: 1.3em;
    font-family: Syne, sans-serif;
    font-weight: 500;
`

export const HowToDesc = styled.p`
    font-size: 1em;
    color: #5F6368;
    font-family: DM Sans, sans-serif;
    font-weight: 400;
    max-width: 60rem;
`