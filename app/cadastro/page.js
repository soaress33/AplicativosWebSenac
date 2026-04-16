"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

    const [email, SetEmail] = useState("");
    const [telefone, SetTelefone] = useState("");

    const [cadastro, SetCadastro] = useState([]);

    const cadastrarPessoas = () =>{
        if (!email || !telefone) return;

        const novaPessoa ={
            email,
            telefone,
        };

    const novaLista = cadastro.slice();
    SetCadastro.push(novaPessoa);
    alert("Pessoa cadastrada com sucesso...")
    
    }

    function LimparDados(){
        SetEmail("");
        SetTelefone("");
    }

    return (
        <div className="bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col  w-screen h-screen"
            style={{ backgroundImage: "url('/black.svg')" }}>

                <div className="bg-white rounded-2xl items-center flex flex-col shadow-xl max-w-xl w-[90%] h-110">
                    <div className=" justify-center flex text-5xl text-black font-black mt-4">
                        <h1>Cadastro</h1>
                    </div>
                    
                    <div className=" justify-center items-center flex-col flex  mt-5">
                        <input 
                        onChange={(e) => SetEmail(e.target.value)}
                        value={email}
                        placeholder="Digite seu E-mail:"
                        className="w-100 border-2 border-black p-2 text-black h-14"></input>

                        <input 
                        onChange={(e) => SetTelefone(e.target.value)}
                        value={telefone}
                        type="tell"
                        placeholder="Digite seu Telefone"
                        className="w-100 border-2 border-black text-black  h-14 mt-5"></input>
                    </div>

                    <button
                    onClick={cadastrarPessoas}
                    className="bg-gray-600 hover:bg-gray-500 w-100 mt-5 h-14 font-black text-2xl">Cadastrar</button>

                    <button 
                    onClick={LimparDados}
                    className="bg-red-600 hover:bg-red-500  w-100 mt-5 h-14 font-black text-2xl">Limpar</button>

                    <Link
                    
                    className=" font-black text-black text-xs items-center flex justify-cententer mt-4"
                    href={"/principal"}>VOLTAR PARA O MENU PRINCIPAL</Link>
                </div>

              
        </div>
    );
}