"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
              <input className="bg-white p-2 border-2 w-90 h-12 border-black" />
            </div>

            {/* Password */}
            <div className="mt-7">
              <h1>Password</h1>
              <input
                type="password"
                className="bg-white border-2 h-12 w-90 p-2 border-black"
              />
            </div>

            {/* Botão */}
            <Link href={"/principal"}>
              <button className="bg-green-500 text-white text-xl hover:bg-green-400 w-90 h-10 mt-7 rounded">
                Entrar
              </button>
            </Link>

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