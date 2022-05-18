import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 100%;
    background: var(--bg-panel);
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;
    color: black;
`

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label`

`

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        accent-color: black;
        margin-top: 0;
        margin-right:3px;
    }
`

export const Button = styled.button`
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: var(--color-primary);
    gap: 10px;
    margin: 0 10px;
`