import { IconType } from "react-icons";
import { BoxResume, ResumeHead, ResumeHeadTitle, Total } from "./style";

interface ResumeProps{
    title : string
    icone: IconType
    color?: string | 'black'
    value: string
}

export default function ResumeItem(props: ResumeProps){
    let Icone = props.icone
    return(
        <BoxResume>
            <ResumeHead>
                <ResumeHeadTitle>{props.title} <Icone fill={props.color} /></ResumeHeadTitle>
            </ResumeHead>
            <Total>{props.value}</Total>
        </BoxResume>
    )
}