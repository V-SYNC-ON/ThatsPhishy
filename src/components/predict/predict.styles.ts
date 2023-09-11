import styled from "styled-components";

export const PredictContainer = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const PredictContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 80%;
    height: 50vh;
    margin: auto;
    max-width: 80rem;
    align-items: center;
    justify-content: center;
    font-family: Syne, sans-serif;

    h1 {
        font-size: 2.2em;
        color: #7F5BFF;
        text-align: center;
        user-select: none;
    }

    input {
        width: 100%;
        height: 3rem;
        padding: 1.5rem;
        box-sizing: border-box;
        font-family: DM Sans, sans-serif;
        background-color: white;
        border: 2px solid #EFEFEF;
        background: #FFF;
        color: #AEAEAE;
        box-shadow: 0px 4px 44px 0px rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        font-size: 1em;
    }

    :-ms-input-placeholder,
    ::-webkit-input-placeholder
    {
        color: #AEAEAE;
    }
    button {
        border-radius: 1rem;
        border: none;
        padding: 1rem 4rem;
        color: white;
        font-weight: 700;
        font-size: 1.2em;
        letter-spacing: 0.05rem;
        line-height: 22px; 
        cursor: pointer;

        background: linear-gradient(315deg, #4624C2 0%, #7F5BFF 100%);
        box-shadow: 0px 20px 40px 0px #BDACFB, 3px 1px 15px 0px rgba(255, 255, 255, 0.50) inset, 0px -3px 10px 0px rgba(0, 0, 0, 0.37) inset;
        font-family: Syne, sans-serif;
    }
`

export const PredictMap = styled.img`
    width: 100%;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
`