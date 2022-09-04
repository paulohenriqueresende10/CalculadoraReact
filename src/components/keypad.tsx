import React, { ReactNode } from "react";

type KeypadProps = {
    children: ReactNode;
}

export default function Keypad(props: KeypadProps) {
    return(
        <div className="keypad">
           {props.children}
        </div>
    )
}