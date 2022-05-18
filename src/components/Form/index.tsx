import React, {useState} from "react";
import { Container, InputContent, Label, Input, RadioGroup, Button } from "./style";

export default function Form(){
    const [desc, setDesc] = useState('');
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if(!desc || !amount){
            alert('Informe a descrição e valor!');
            return;
        }
        else if(parseInt(amount)  <= 0){
            alert('Informe um valor válido!')
        }

        const transaction = {
            id: generateId(),
            desc: desc,
            amount: amount,
            expense: isExpense
        };
        
        handleAdd(transaction)

        setDesc("")
        setAmount("")
    }

    const generateId = () => Math.round(Math.random() * 10000);

    return(
        <Container>
            <InputContent>
                <Label>Descrição</Label>
                <Input value={desc} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setDesc(e.target.value) } />
            </InputContent>
            <InputContent>
                <Label>Valor</Label>
                <Input value={amount} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAmount(e.target.value) } />
            </InputContent>
            <RadioGroup>
                <Input 
                    type='radio' 
                    id='rIncome' 
                    defaultChecked 
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <Label htmlFor="rIncome">Entrada</Label>
                <Input 
                    type='radio' 
                    id='rExpanse' 
                    defaultChecked 
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <Label htmlFor="rExpanse">Saída</Label>
                <Button onClick={handleSave}>Adicionar</Button>
            </RadioGroup>
        </Container>
    )
}

function handleAdd(transaction: { id: number; desc: string; amount: string; expense: boolean; }) {
    throw new Error("Function not implemented.");
}
