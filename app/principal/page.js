import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black items-center flex  w-screen h-screen">
      <div className="bg-blue-950 w-60 t-20 flex-col items-center border-black justify-center h-screen">
        {/**caixa logo do senaccccccc */}
        <div className="  flex justify-center">
          <Image
          width={200}
          height={200}
          src={"/1.png"}
          alt=""
          />
        </div>
        <div className="  ml-2 text-orange-600 text-2xl mt-8">
          <Link href={"/abc"}>
            <h1>Calculadora</h1>
          </Link>

          <Link href={"/abc"}>
            <h1 className="mt-2">Descubra sua idade</h1>
          </Link>

           <Link href={"/IMC"}>
            <h1 className="mt-2">Seu IMC</h1>
          </Link>


     


        </div>

      </div>
       <div className=" items-center flex flex-col font-bold ml-190 -mt-20 h-50">
        <h1 className="text-orange-400 text-4xl animate-bounce ">BEM-VINDO!</h1>
        <p className="text-white">Aplicativos Web do Curos Senac 2026</p>
        <p className="text-white">Truma 027</p>
       </div>
       

     

    
    </div>
  );
}
