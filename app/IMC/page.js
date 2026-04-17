"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { setLazyProp } from "next/dist/server/api-utils";
import { setRequestMeta } from "next/dist/server/request-meta";



export default function Home() {
    const [peso, SetPeso] = useState("");
    const [altura, SetAltura] = useState("");
    const [resultado, SetResultado] = useState(null);
    const [classificado, SetClassificado] = useState("");


    function calcularIMC() {
        if (!peso || !altura) return;
        const imc = peso / (altura * altura);
        SetResultado(imc.toFixed(2));


        if (imc < 1.85) SetClassificado("Abaixo do Peso");
        else if (imc < 25) SetClassificado("Peso Normal");
        else if (imc < 30) SetClassificado("Sobrepeso");
        else SetClassificado("Obesidade");


    }

    function limparIMC() {
        SetResultado(null);
        SetClassificado("");
        SetAltura("");
        SetPeso("");

    }





    return (
        <div className="bg-no-repeat bg-cover bg-center items-center justify-center flex flex-col  w-screen h-screen"
            style={{ backgroundImage: "url('/black.svg')" }}>



            <div className="bg-white w-130 flex-col items-center flex  rounded-2xl h-140">
                <div className=" w-110 flex-col justify-center items-center flex h-50  ">
                    <h1 className="font-black text-4xl text-black ">Calcular o IMC </h1>
                </div>

                {/*caixa das input*/}
                <div className="font-black text-black">

                    <div className=" w-full font-bold me-30 ">
                        <input
                            type="number"
                            placeholder="Peso (kg) EX:80"
                            className="no-spinner outline-none bg-white w-full h-14 mt-2 border-2 border-black"
                            value={peso}
                            onChange={(e) => SetPeso(e.target.value)}>
                        </input>
                    </div>


                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input
                            type="number"
                            placeholder="Altura (m) EX: 1.75"
                            className="bg-white w-120 h-14 mt-2 border-2
                               border-black" value={altura} onChange={(e) => SetAltura(e.target.value)} >
                        </input>
                    </div>


                </div>


                <button onClick={calcularIMC} className=" bg-gray-600 hover:bg-gray-500 font-bla text-white w-120 h-14 mt-5 ">
                    <h1>CALCULAR O IMC</h1>
                </button>

                <button onClick={limparIMC} className=" bg-red-600 hover:bg-red-500 font-black  text-white w-120 h-14 mt-5 ">
                    <h1>LIMPAR</h1>
                </button>


                <Link href={"/principal"} >
                    <div className=" font-black text-black text-xs items-center flex justify-center mt-4">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>


               
            </div>

               {resultado &&(     
             <div className="bg-white text-black font-black mt-4 w-130 h-25 border-2 justify-center rounded-2xl flex flex-col text-2xl">
                    <p> <strong>IMC:   </strong> {resultado} </p>
                    <p> <strong>Classificação:   </strong> {classificado} </p>
                </div>
                ) }
        </div>
    );
}
