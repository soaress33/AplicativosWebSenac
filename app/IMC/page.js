"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { setLazyProp } from "next/dist/server/api-utils";
import { setRequestMeta } from "next/dist/server/request-meta";



export default function Home() {
    const [peso, SetPeso] = useState("");
    const [altura, SetAltura] = useState("");
    const [resultado, SetResultado] = useState("null");
    const [classificado, SetClassificado] = useState("");


    function calcularIMC(){
         if (!peso || !altura) return;
         const  imc = peso /  (altura * altura);
        SetResultado(imc.toFixed(2));  

        
        if (imc < 1.85) SetClassificado("Abaixo do Peso");
        else if (imc < 25) SetClassificado("Peso Normal");
        else if (imc < 30) SetClassificado("Sobrepeso");
        else SetClassificado("Obesidade");


    }

    function limparIMC(){
    SetResultado(null);
    SetClassificado("");
    SetAltura("");
    SetPeso("");

    }

    

    

    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-170">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-4xl text-orange-500">Calcular o IMC </h1>
                </div>

                {/*caixa das input*/}
                <div className="">

                    <div className=" w-90 font-bold me-30 ">
                           <input 
                                 type="number"
                                 placeholder="Peso (kg) EX:80"
                                 className="no-spinner outline-none bg-white w-120 h-14 mt-2 border-2 border-black"
                                 value={peso}
                                 onChange={(e) => SetPeso(e.target.value)}>
                          </input>
                    </div>


                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <input 
                        type="number"
                        placeholder="Altura (m) EX: 1,75"
                                className="bg-white w-120 h-14 mt-2 border-2
                               border-black" value={altura} onChange={(e) => SetAltura(e.target.value)} >
                          </input>
                    </div>


                </div>


                <button onClick={calcularIMC} className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    
                    <h1>CALCULAR O IMC</h1>
                </button>

                <button onClick={limparIMC} className=" bg-yellow-300 hover:bg-yellow-500 border-2 border-gray-500 text-white w-120 h-14 mt-5 ">
                    <h1>LIMPAR</h1>
                </button>



                <Link href={"/"} >
                    <div className=" font-bold text-xs items-center flex justify-center mt-2">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>


                <div className="bg-white mt-10 w-100 h-25 border-2 justify-center rounded-2xl flex flex-col text-2xl">
                    <p> <strong>IMC:   </strong> {resultado} </p>
                    <p> <strong>Classificação:   </strong> {classificado} </p>


                </div>









            </div>
        </div>
    );
}
