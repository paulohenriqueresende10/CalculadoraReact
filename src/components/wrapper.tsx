import React, { ReactNode } from "react";

type WrapperProps = {
    children: ReactNode;
}

export default function Wrapper(props: WrapperProps) {
    return(
        <div className="wrapper">
           {props.children}
        </div>
    )
}