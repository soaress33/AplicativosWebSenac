"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { setLazyProp } from "next/dist/server/api-utils";
import { setRequestMeta } from "next/dist/server/request-meta";



export default function Home() {
    const [idade, SetIdade] = useState("");
    const [resultado, SetResultado] = useState("");

    function total() {
        const soma =  2026 - parseFloat(idade) ;
        SetResultado(soma);

    }


    function limparFormulario() {
        SetA("");
        SetB("");
        SetC("");
        SetResultado("");

    }





    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-170">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-5xl text-orange-400">SUA IDADE</h1>
                </div>

                {/*caixa das input*/}
                <div className=" w-120 flex items-center">
                    <div className=" justify-center flex ml-18  w-90 font-bold me-5 ">
                        <input
                            type="number"
                            placeholder="Digite o ano : "
                            className="no-spinner outline-none bg-white w-55 h-14  border-2 border-black"
                            value={idade}
                            onChange={(e) => SetIdade(e.target.value)} >
                        </input>
                    </div>
                </div>

                <button
                    onClick={total}
                    className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>SOMAR</h1>
                </button>

                <button onClick={limparFormulario} className=" bg-yellow-300 hover:bg-yellow-500 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>LIMPAR</h1>
                </button>



                <Link href={"/"} >
                    <div className=" font-bold text-xs items-center flex justify-center mt-2">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>





            </div>
            <div className="bg-white -mt-50 w-100  border-2 justify-center ml-50 rounded-2xl  flex flex-col text-2xl">
                <h1>Resultado: {resultado}</h1>



            </div>
        </div>
    );
}
