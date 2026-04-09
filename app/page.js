"use client";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";


export default function Home() {


  const [nome, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  async function Logar(e) {
    e.preventDefault();

    // validando se tem o nome e a senha definidos
    if (nome && senha) {
      //pega a resposta da server Action
      const res = await login(nome, senha);
      if (res?.success) {

        console.log("Usuário Autenticado com Sucesso ... ");
        console.log("REDIRECIONANDO ... ");
        router.push("/principal");
        router.refresh();

      } else {

        alert("Erro ao Logar verificar com o Adm ");

      }

    } else {

      alert("Favor Informar Usuário e Senha ");
    }
  }



  return (
    <div className="bg-white items-center grid grid-col md:grid-cols-2 justify-center w-screen h-screen">

      {/* Lado esquerdo */}
      <div className="bg-white h-screen flex justify-center items-center">
        <div className="lg:text-black lg:w-110 lg:items-center lg:flex-col lg:justify-center lg:flex">
          <h1 className="text-3xl font-bold">MEU SISTEMA</h1>
          <p>Gerencie sua vida, vendas e resultado de forma simples e</p>
          <p>eficiente</p>
        </div>
      </div>

      {/* Lado direito */}
      <div className="bg-gray-400 h-screen flex flex-col items-center justify-center">

        {/* Caixa de Login */}
        <div className="bg-white text-black rounded-2xl items-center flex flex-col w-110 h-95">

          <div className="flex justify-center items-center font-bold text-3xl h-20">
            <h1>Login</h1>
          </div>

          <div className="text-2xl font-bold">

            {/* User */}
            <div>
              <h1>User</h1>
              <input
              onChange={(e) => setUsername(e.target.value)}
              value={nome}
              className="bg-white p-2 border-2 w-90 h-12 border-black" />
            </div>

            {/* Password */}
            <div className="mt-7">
              <h1>Password</h1>
              <input
                onChange={(e) => setSenha(e.target.value)}
                value={senha}
                type="password"
                className="bg-white border-2 h-12 w-90 p-2 border-black"
              />
            </div>

            {/* Botão */}
      
              <button 
              onClick={Logar}
              type="button"
              className="bg-green-500 text-white text-xl hover:bg-green-400 w-90 h-10 mt-7 rounded">
                Entrar
              </button>
    

          </div>
        </div>

        {/* Footer */}
        <div className="text-black flex flex-col items-center w-110 h-20 mt-1">
          <p>@ 2026 Júnior Soares</p>
          <p>Todos os direitos reservados</p>
        </div>

      </div>
    </div>
  );
}