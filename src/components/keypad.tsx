import React, { useEffect, useState } from "react";
import Botao from './botao';

const btnValues = [
    "C", "+-", "%", "/",
    7, 8, 9, "X",
    4, 5, 6, "-",
    1, 2, 3, "+",
    0, ".", "=",
];

export default function Keypad() {
    const [calculadora, setCalculadora] = useState({
        sign: "",
        num: 0,
        res: 0,
    });

    const math = (a: number, b: number, sign: string) =>
        sign === "+"
            ? a + b
            : sign === "-"
                ? a - b
                : sign === "X"
                    ? a * b
                    : a / b;

    const Calcular = () => {
        if (calculadora.sign && calculadora.num) {
            setCalculadora({
                ...calculadora,
                res:
                    calculadora.num === 0 && calculadora.sign === "/"
                        ? 0
                        : math(Number(calculadora.res), Number(calculadora.num), calculadora.sign),
                sign: "",
                num: 0,
            });

        }
    }

    const DisplayNumero = (e: any) => {
        const Value = e.target.innerHTML
        setCalculadora({
            ...calculadora,
            sign: calculadora.sign,
            num: calculadora.num === 0 && Value === "0"
                ? "0"
                : calculadora.num % 1 === 0
                    ? Number(calculadora.num + Value)
                    : calculadora.num + Value,
            res: !calculadora.sign ? 0 : calculadora.res,
        })
    }

    const ResetarCalculadora = () => {
        setCalculadora({
            ...calculadora,
            sign: "",
            num: 0,
            res: 0,
        });
    };

    const Operacao = (e: any) => {
        const Op = e.target.innerHTML

        setCalculadora({
            ...calculadora,
            sign: Op,
            num: 0,
            res: !calculadora.res && calculadora.num ? calculadora.num : calculadora.res,
        });
    };

    const InverterNumero = () => {
        setCalculadora({
            ...calculadora,
            num: calculadora.num ? calculadora.num * -1 : 0,
            res: calculadora.res ? calculadora.res * -1 : 0,
            sign: "",
        });
    };

    const PorcentagemNumero = () => {
        let num = calculadora.num ? parseFloat(calculadora.num.toString()) : 0;
        let res = calculadora.res ? parseFloat(calculadora.res.toString()) : 0;

        setCalculadora({
            ...calculadora,
            num: (num /= Math.pow(100, 1)),
            res: (res /= Math.pow(100, 1)),
            sign: "",
        });
    };

    useEffect(() => {
        const Screen: HTMLElement | null = document.getElementById("screen");
        if (Screen) Screen.innerHTML = `${calculadora.num ? calculadora.num : calculadora.res}`;
        const NumButtons = Array.from(document.getElementsByClassName('btn'));
            
            NumButtons.map((button) => {
                if (calculadora.num.toString().length == 8) {
                    if(button.innerHTML != 'C' && button.innerHTML != '%' && button.innerHTML != '+-' && button.innerHTML != '/' && button.innerHTML != 'X' && button.innerHTML != '-' && button.innerHTML != '+') {
                        button.setAttribute("disabled", "");
                    }
                } else {
                    button.removeAttribute("disabled");
                } 
            })
        
        if(calculadora.num.toString() == "Infinity" || calculadora.res.toString() == "Infinity") {
            setCalculadora({
                ...calculadora,
                num: 0,
                res: 0,
                sign: "",
            });
        }

    });

    return (
        <div className="keypad">
            {
                btnValues.map((btn, i) => {
                    return (
                        <Botao
                            key={i}
                            className={btn === "=" ? "equals" : "btn"}
                            value={btn}
                            onClick={
                                btn === 'C'
                                    ? ResetarCalculadora
                                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                                        ? Operacao
                                        : btn === '='
                                            ? Calcular
                                            : btn === "+-"
                                                ? InverterNumero
                                                : btn === "%"
                                                    ? PorcentagemNumero
                                                    : DisplayNumero
                            }
                        />
                    );
                })
            }
        </div>
    )
}