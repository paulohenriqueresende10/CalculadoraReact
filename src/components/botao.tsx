import React, { ReactNode } from "react";

type BotaoProps = {
    onClick: (e: any)=> void;
    className: string;
    value: number | string;
}

export default function Botao(props: BotaoProps) {
    return(
        <button
            className={props.className}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}