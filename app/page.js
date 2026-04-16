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

        alert("Usuário e Senha incorreto ");

      }

    } else {

      alert("Favor Informar Usuário e Senha ");
    }
  }



  return (
    <div className="bg-white flex items-center  justify-center w-full h-screen">


      <div className=" flex flex-col  justify-center
      
      bg-no-repeat bg-cover bg-center items-center  w-screen h-screen"
        style={{ backgroundImage: "url('/black.svg')" }}
      >

        {/* Caixa de Login */}
        <div className="bg-white text-black rounded-2xl items-center flex flex-col w-110 h-95">

          <div className="flex justify-center items-center font-black text-3xl h-20">
            <h1>Login</h1>
          </div>

          <div className="text-2xl font-black">
            {/* User */}
            <div>
              <h1 >User</h1>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={nome}
                className="bg-white p-2 border-2 w-90 h-12  border-black" />
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
              className="bg-gray-600 text-white text-xl hover:bg-gray-500 w-full h-10 mt-7 rounded">
              Entrar
            </button>


          </div>
        </div>

        {/* Footer */}
        <div className="text-white flex flex-col items-center w-full h-20 mt-1">
          <p>@ 2026 Júnior Soares</p>
          <p>Todos os direitos reservados</p>
        </div>

      </div>
    </div>
  );
}