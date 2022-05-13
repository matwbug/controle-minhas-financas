import React, { Component } from "react";
import { IconType } from "react-icons";
import { BoxResume, ResumeHead, ResumeHeadTitle, Total } from "./style";

interface ResumeProps{
    title : string
    icone: IconType
}

export default function ResumeItem(props: ResumeProps){
    return(
        <BoxResume>
            <ResumeHead>
                <ResumeHeadTitle>{props.title} </ResumeHeadTitle>
            </ResumeHead>
            <Total>2121$</Total>
        </BoxResume>
    )
}