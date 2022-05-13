import styled from "styled-components";

export const BoxResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--bg-panel);
    border-radius: 5px;
    padding: 5px 15px;
    min-width: 100px;
    width: 200px;
    color:black;

    p{font-size: 25px;}

    

    @media (max-width: 750px){
        p{font-size: 12px}
        span{font-size: 20px}
        svg{display: none;}
    }
`

export const ResumeHead = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

    svg{
        width: 25px;
        height: 25px;
    }
`

export const ResumeHeadTitle = styled.p`
    font-size: 20px;
`

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`