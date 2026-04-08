"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";




export default function Home() {
    const [nome, SetNome] = useState("");
    const [email, SetEmail] = useState("");
    const [telefone, SetTelefone] = useState("");
    const [cidade, SetCidade] = useState("");
    const [idade, SetIdade] = useState("");

    //saporra aqui e o array
    const cadastrarAluno = () =>{
    if (!nome || !email || !telefone || !cidade || !idade) return;

    const novoAluno = {
       nome,
       email,
       celular,
       cidade, 
       idade,
    };

    const novaLista = aluno.slice();
    novaLista.push(novoAluno);
    setAlunos(novaLista);
    limparDados();
    };

    const limparDados = () => {
    SetNome("");
    SetEmail("");
    SetTelefone("");
    SetCidade("");
    SetIdade("");

    }







    return (
        <div className="bg-white items-center flex flex-col justify-center w-screen h-screen">
            <div className=" w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-170">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-5xl text-orange-400">Cadastro</h1>
                </div>

                {/*caixa das input*/}
                <div className="">



                    <div className=" w-90 font-bold me-30 ">
                        <input
                            placeholder="Nome"
                            className="no-spinner outline-none bg-white w-120 h-14 mt-2 border-2 border-black"
                            value={nome}
                            onChange={(e) => SetNome(e.target.value)} >
                        </input>
                    </div>


                    <div className=" w-90  font-bold me-30 mt-5 ">
                        <input
                            type=""

                            placeholder="E-mail"
                            className="bg-white w-120 h-14 outline-none mt-2 border-2
                               border-black"
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)} >
                        </input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input
                            type="number"
                            placeholder="Telefone"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2
                               border-black"
                            value={telefone}
                            onChange={(e) => SetTelefone(e.target.value)}>
                        </input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input

                            type=""
                            placeholder="Cidade"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2
                               border-black"
                            value={cidade}
                            onChange={(e) => SetCidade(e.target.value)} >
                        </input>
                    </div>


                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input

                            type="number"
                            placeholder="Idade"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2
                               border-black"
                            value={idade}
                            onChange={(e) => SetIdade(e.target.value)} >
                        </input>
                    </div>

                </div>


                <button 
                onClick={cadastrarAluno}
                className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>ENVIAR DADOS</h1>
                </button>

                <button onClick={limparDados} className=" bg-orange-500 hover:bg-yellow-400 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>LIMPAR</h1>
                </button>


                <Link href={"/"} >
                    <div className=" font-bold text-xs items-center flex justify-center mt-2">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>


            </div>
            {alunos.length}
            <div className="bg-white mt-5 w-130  border-2 justify-center rounded-2xl  flex flex-col text-2xl">
                <div className="ml-52 mt-2 text-2xl font-bold" > <h1>Cadastro</h1> </div>
                <p className="mt-2"> <strong>Nome:   </strong> {nome} </p>
                <p className="mt-2 "> <strong>E-mail:   </strong> {email} </p>
                <p className="mt-2 "> <strong>Telefone:   </strong> {telefone} </p>
                <p className="mt-2  "> <strong>Cidade:   </strong> {cidade} </p>
                <p className="mt-2  "> <strong>Idade:   </strong> {idade} </p>



            </div>
        </div>
    );
}
