"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { setLazyProp } from "next/dist/server/api-utils";
import { setRequestMeta } from "next/dist/server/request-meta";



export default function Home() {
    const [nome, SetNome] = useState("");
    const [email, SetEmail] = useState("");
    const [idade, SetIdade] = useState("");
    const [telefone, SetTelefone] = useState("");




    function limparFormulario() {
        SetNome("");
        SetEmail("");
        SetIdade("");
        SetTelefone("");

    }





    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-170">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-5xl text-orange-400">FIXA DO ALUNO </h1>
                </div>

                {/*caixa das input*/}
                <div className="">



                    <div className=" w-90 font-bold me-30 ">
                        <input

                            placeholder="Nome"
                            className="no-spinner outline-none bg-white w-120 h-14 mt-2 border-2 border-black"
                            value={nome}
                            onChange={(e) => SetNome(e.target.value)}
                        >
                        </input>
                    </div>


                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input
                            type=""
                            placeholder="E-mail"
                            className="bg-white w-120 h-14 mt-2 border-2
                               border-black"
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)} >
                        </input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input
                            type="number"
                            placeholder="Idade"
                            className="bg-white w-120 h-14 mt-2 border-2
                               border-black"
                            value={idade}
                            onChange={(e) => SetIdade(e.target.value)}>
                        </input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input
                        
                            type="number"
                            placeholder="Telefone"
                            className="bg-white w-120 h-14 mt-2 border-2
                               border-black"
                            value={telefone}
                            onChange={(e) => SetTelefone(e.target.value)} >
                        </input>
                    </div>


                </div>


                <button className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>ENVIAR DADOS</h1>
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
                <p className=""> <strong>Nome:   </strong> {nome} </p>
                <p className="mt-2 text-yellow-400"> <strong>E-mail:   </strong> {email} </p>
                <p className="mt-2 text-red-500"> <strong>Idade:   </strong> {idade} </p>
                <p className="mt-2 text-green-400"> <strong>Telefone:   </strong> {telefone} </p>
                


            </div>
        </div>
    );
}
