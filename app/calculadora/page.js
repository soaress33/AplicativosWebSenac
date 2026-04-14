"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { setLazyProp } from "next/dist/server/api-utils";
import { setRequestMeta } from "next/dist/server/request-meta";



export default function Home() {
    


     function somar(A, B){
    console.log("Estou Somando A com B veja abaixo.....");
    if (A!= "" && B!= ""){
      const soma = parseFloat(A) + parseFloat(B)
      console.log("Resultado da Soma...." + soma.toString())
      return {soma: soma.toString()};

    }
    
    return {error: "Erro ao Somar" };
 }







    return (
        <div className="bg-gray-300 flex-col items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-120">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-5xl text-orange-400">CALCULADORA</h1>
                </div>

                {/*caixa das input*/}
                <div className=" w-120  -mt-13 flex items-center">
                    <div className=" justify-center flex ml-18  w-90 font-bold me-5 ">
                        <input
                            type="number"
                            placeholder=" "
                            onChange={(e) => A(e.target.value)}
                            className="no-spinner outline-none  bg-white text-black w-35 h-14  border-2 border-black"> 
                        </input>

                        <input
                            type="number"
                            placeholder=" "
                            onChange={(e) => B(e.target.value)}
                            className="no-spinner outline-none ml-2 bg-white text-black w-35 h-14  border-2 border-black"> 
                        </input>
                    </div>
                </div>









                {/**CAIXA DOS BOTÕES  */}
                <div className="bg-blue-300 mt-25">
                     <button
                     onClick={somar}
                      className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-5xl text-black w-25 h-18  ">
                      <h1>+</h1>
                    </button>

                    <button
                      className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-5xl text-black w-25 h-18  ">
                      <h1>-</h1>
                    </button>

                    <button
                      className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-5xl text-black w-25 h-18  ">
                      <h1>x</h1>
                    </button>

                    <button
                      className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-5xl text-black w-25 h-18  ">
                      <h1>/</h1>
                    </button>

                </div>



                <Link href={"/principal"} >
                    <div className=" font-bold text-xs items-center flex justify-center mt-2">
                        <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                    </div>
                </Link>
            </div>

        </div>
    );
}
