import styled from "styled-components";

export const ResultContainer = styled.div`
    width: 80%;
    max-width: 80rem;
    margin: auto;
    border: 2px solid #EFEFEF;
    background: rgba(255, 255, 255, 0.50);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;
    gap: 2rem;
    border-radius: 1rem;
    box-sizing: border-box;

    @media only screen and (max-width: 990px) {
        flex-direction: column;
        gap: 3rem;
        padding: 2rem;
    }
`

export const ResultDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 50%;

    @media only screen and (max-width: 990px) {
        max-width: 100%;
    }
`

export const ResultTitle = styled.p`
    font-family: Syne, sans-serif;
    font-size: 1.4em;
    font-weight: 500;
`

export const ResultPercent = styled.p`
    font-family: DM Sans, sans-serif;
    font-size: 2.5em;
    font-weight: 700;
`

export const ResultStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: DM Sans, sans-serif;
    font-size: 1em;
    color: #5F6368;

    p {
        font-weight: 300;
    }
    span {
        font-weight: 500;
        color: black;
    }
    .Safe {
        color: green;
    }
    .NotRecommended {
        color: brown;
    }
    .Risky {
        color: red;
    }
`

export const ResultGauge = styled.div`
    width: 30%;
    height: 30%;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media only screen and (max-width: 990px) {
        width: 80%;
        height: 80%;
    }
`