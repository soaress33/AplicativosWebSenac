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
        const soma = 2026 - parseFloat(idade);
        SetResultado(soma);

    }


    function limparFormulario() {
        SetIdade("");
        SetResultado("");

    }





    return (
        <div className="bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col  w-screen h-screen"
            style={{ backgroundImage: "url('/black.svg')" }}>
            <div className="bg-white w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-120">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-black text-5xl text-black">SUA IDADE</h1>
                </div>

                {/*caixa das input*/}
                <div className=" w-full  justify-center flex items-center">
                        <input
                            type="number"
                            placeholder="Digite o ano do seu nascimento: "
                            className="no-spinner outline-none bg-white text-black w-120 p-2 h-14  border-2 border-black"
                            value={idade}
                            onChange={(e) => SetIdade(e.target.value)} >
                        </input>
                </div>

                <button
                    onClick={total}
                    className=" bg-gray-600 hover:bg-gray-500  border-2  text-white w-120 h-14 mt-5 ">
                    <h1>RESULTADO</h1>
                </button>

                <button onClick={limparFormulario} className="  bg-red-600 hover:bg-red-500 border-2 font-black text-white w-120 h-14 mt-5 ">
                    <h1>LIMPAR</h1>
                </button>



                <Link href={"/principal"} >
                    <div className=" font-black text-black text-xs items-center flex justify-center mt-2">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>
            </div>

            {resultado &&(
             <div className="bg-white text-black  w-130 mt-5  border-2 justify-center  rounded-2xl  flex flex-col text-2xl">
                    <h1>Resultado: {resultado}</h1>
            </div>
            )}

        </div>
    );
}
