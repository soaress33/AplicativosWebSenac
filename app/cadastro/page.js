"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cidade, setCidade] = useState("");
    const [idade, setIdade] = useState("");
    const [alunos, setAlunos] = useState([]);

    const cadastrarAluno = () => {
        if (!nome || !email || !telefone || !cidade || !idade) return;
        

        const novoAluno = {
            nome,
            email,
            telefone,
            cidade,
            idade,
        };

        const novaLista = alunos.slice();
        novaLista.push(novoAluno);
        setAlunos(novaLista);
        limparDados();
    };

    const limparDados = () => {
        setNome("");
        setEmail("");
        setTelefone("");
        setCidade("");
        setIdade("");
    };

    return (
        <div className="bg-black items-center flex flex-col justify-center w-screen h-screen">
            <div className="w-130 flex-col items-center bg-amber-50 border-black flex border-2 rounded-2xl h-170">
                <div className="w-110 flex-col justify-center items-center flex h-50 ml-8">
                    <h1 className="font-bold text-5xl text-orange-400">Cadastro</h1>
                </div>

                <div className="text-black">
                    <div className="w-90 font-bold me-30">
                        <input
                            placeholder="Nome"
                            className="no-spinner outline-none bg-white w-120 h-14 mt-2 border-2 border-black"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="w-90 font-bold me-30 mt-5">
                        <input
                            placeholder="E-mail"
                            className="bg-white w-120 h-14 outline-none mt-2 border-2 border-black"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="w-90 font-bold me-30 mt-5">
                        <input
                            type="number"
                            placeholder="Telefone"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2 border-black"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>

                    <div className="w-90 font-bold me-30 mt-5">
                        <input
                            placeholder="Cidade"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2 border-black"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>

                    <div className="w-90 font-bold me-30 mt-5">
                        <input
                            type="number"
                            placeholder="Idade"
                            className="bg-white w-120 outline-none h-14 mt-2 border-2 border-black"
                            value={idade}
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    onClick={cadastrarAluno}
                    className="bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-white w-120 h-14 mt-5"
                >
                    <h1>ENVIAR DADOS</h1>
                </button>

                <button
                    onClick={limparDados}
                    className="bg-orange-500 hover:bg-yellow-400 border-2 border-gray-500 text-white w-120 h-14 mt-5"
                >
                    <h1>LIMPAR</h1>
                </button>

                <Link href={"/"}>
                    <div className="font-bold text-xs items-center flex justify-center mt-2">
                        <h1>VOLTAR PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>
            </div>

            <div className="mt-2 text-gray-600">
                Alunos cadastrados: {alunos.length}
            </div>

            <div className="bg-black border-white mt-5 w-130 border-2 justify-center rounded-2xl flex flex-col text-2xl p-4">
                <div className="text-center text-2xl font-bold">
                    <h1>Dados Atuais</h1>
                </div>
                <p className="mt-2"><strong>Nome:</strong> {nome}</p>
                <p className="mt-2"><strong>E-mail:</strong> {email}</p>
                <p className="mt-2"><strong>Telefone:</strong> {telefone}</p>
                <p className="mt-2"><strong>Cidade:</strong> {cidade}</p>
                <p className="mt-2"><strong>Idade:</strong> {idade}</p>
            </div>
        </div>
    );
}