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
export default function Home(){
    return(
        <>
            <Container>
                <ResumeItem title="Entradas" icone={BsArrowUpCircle} value="R$ 1000.00" color="green"/>
                <ResumeItem title="Saídas" icone={BsArrowDownCircle} value="R$ -1000.00" color="red"/>
                <ResumeItem title="Total" icone={AiOutlineDollarCircle} value="R$ 1000.00" />
            </Container>
            <Container>
                <Form />
            </Container>
        </>
    )
}