import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (


    <div className=" bg-no-repeat bg-cover bg-center items-center  w-screen h-screen" 
    style={{backgroundImage: "url('/fundo.svg')"}}>

      <div className="grid grid-cols-[300px_1fr]  h-screen">
        <div className="  text-3xl  flex flex-col row-span-1 p-5">
          <Link href={"/IMC"}> App IMC</Link>
            <Link href={"/ano"}>Descubra seu Ano</Link>
              <Link href={"/cadastro"}>Cadastro</Link>
        </div>

        <div className=" bg-cover bg-center h-screen flex items-center justify-center">
          <div className="  mr-[14vw] flex-col w-120 items-center flex justify-center h-100">
            <h1 className="text-orange-600 font-black animate-bounce -tracking-tight text-4xl">BEM VINDO !</h1>
            <p className="text-black font-bold">Aplicativos Web do Curso do Senac 2026</p>
            <p className="font-bold">Turma 027</p>
          </div>
        </div>

      </div>


    </div>
  );
}
