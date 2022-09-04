import React, { ReactNode } from "react";

type NumeroProps = {
    children: ReactNode;
}

export default function Screen(props: NumeroProps) {
    return <div className="screen">{props.children}</div>
}