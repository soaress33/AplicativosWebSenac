import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (


    <div className=" bg-no-repeat bg-cover bg-center items-center  w-screen h-screen"
      style={{ backgroundImage: "url('/black.svg')" }}>

      <div className="grid grid-cols-[300px_1fr]  h-screen">
        <div className=" gap-2 text-3xl ml-2 mt-2 w-full font-black flex flex-col  ">
          <Link href={"/IMC"}> App IMC</Link>
          <Link href={"/ano"}>App de Descobrir idade</Link>
          <Link href={"/cadastro"}>Cadastro</Link>
        </div>

        <div className="w-full md:w-1/2 mx-auto bg-cover bg-center h-screen flex items-center justify-center">
          <div className="w-full md:w-1/2 mx-auto  mr-[14vw] flex-col  items-center flex justify-center h-100">
            <h1 className="text-orange-600 font-black animate-bounce -tracking-tight text-4xl">BEM VINDO !</h1>
            <p className="text-blue-400 font-bold">Aplicativos Web do Curso do Senac 2026</p>
            <p className="font-bold">Turma 027</p>
          </div>
        </div>

      </div>


    </div>
  );
}
