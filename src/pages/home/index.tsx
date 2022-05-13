import React from "react";
import ResumeItem from "../../components/ResumeItem";
import { Container } from "./style";
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa'

export default function Home(){
    return(
        <Container>
            <ResumeItem title="Entradas" icone={FaRegArrowAltCircleUp} />
            <ResumeItem title="Saídas" icone={FaRegArrowAltCircleDown} />
            <ResumeItem title="Total" icone={FaDollarSign} />
        </Container>
    )
}