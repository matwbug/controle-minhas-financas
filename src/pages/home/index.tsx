import ResumeItem from "../../components/ResumeItem";
import { Container } from "./style";
import{
    AiOutlineDollarCircle
} from 'react-icons/ai'

import {
    BsArrowUpCircle,
    BsArrowDownCircle
} from 'react-icons/bs'

import Form from "../../components/Form";
import React, {useState, useEffect} from 'react'
export default function Home(){
    
    const data = localStorage.getItem('transactions');
    const [transacList, setTransacList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState("");
    const [expense, setExpense] = useState("");
    const [total, setTotal] = useState("");

    useEffect(() => {
        const amountExpense = transacList
            .filter((item:any) => item.expense)
            .map((transaction:any) => Number(transaction.amount))

        const amountIncome = transacList
            .filter((item:any) => !item.expense)
            .map((transaction:any) => Number(transaction.amount))
        
        const expense = amountExpense.reduce((acc:any, cur:any) => acc + cur, 0).toFixed(2);
        const income = amountExpense.reduce((acc:any, cur:any) => acc + cur, 0).toFixed(2);  
        
        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? '-' : ''} R$ ${total}`)

    }, [transacList]);
    const handleAdd = (transaction:any) => {
        const newArrayTransaction = [...transacList, transaction];

        setTransacList(newArrayTransaction);

        localStorage.setItem("transactions", JSON.stringify(newArrayTransaction));
    }

    
    return(
        <>
            <Container>
                <ResumeItem title="Entradas" icone={BsArrowUpCircle} value={income} color="green"/>
                <ResumeItem title="Saídas" icone={BsArrowDownCircle} value={expense} color="red"/>
                <ResumeItem title="Total" icone={AiOutlineDollarCircle} value={total} />
            </Container>
            <Container>
                <Form handleAdd={handleAdd} />
            </Container>
        </>
    )
}