import React, { ReactNode } from "react";

type NumeroProps = {
    children: ReactNode;
}

export default function Numero(props: NumeroProps) {
    return <p>{props.children}</p>
}