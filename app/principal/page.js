import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (


    <div className="bg-black items-center  w-screen h-screen">
      <div className="grid grid-cols-[300px_1fr]  h-screen">
        <div className="bg-orange-400 text-3xl flex flex-col row-span-1 p-5">
          <Link href={"/IMC"}>IMC</Link>
          <Link href={"/ano"}>Descubra seu Ano</Link>
          <Link href={"/cadastro"}>Cadastro</Link>
        </div>
        <div className="bg-black flex items-center justify-center row-span-1  ">
          <div className=" flex-col w-120 items-center flex justify-center h-100">
            <h1 className="text-orange-400 text-4xl">BEM-VINDO!</h1>
            <p className="text-blue-500">Aplicativos Web do Curso do Senac 2026</p>
            <p>Turma 027</p>
          </div>
        </div>
      </div>




    </div>
  );
}
