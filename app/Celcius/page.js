"use client";
import { use, useState } from "react";
import { converterCelsius } from "@/actions/converterCelcus/converterCelsius";
import Link from "next/link";




export default function Home() {

    const [A, setA] = useState("");
    const [resultado, setResultado] = useState(null);




    return (
        <div className="bg-gray-300 flex-col items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-120">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-3xl items-center flex text-orange-400">CONVETER CELCIUS PARA </h1>
                    <h1 className="font-bold text-3xl items-center flex text-orange-400">FAHRENHEIT</h1>
                </div>

                {/*caixa das input*/}
                <div className=" w-120  -mt-13 flex items-center">
                    <div className=" justify-center flex ml-18  w-90 font-bold me-5 ">
                        <input
                            type="number"
                            placeholder=" "
                            onChange={(e) => setA(e.target.value)}
                            value={A}
                            className="no-spinner outline-none  bg-white text-black w-35 h-14  border-2 border-black">
                        </input>


                    </div>
                </div>

                <h1>Resultadooo: {resultado}</h1>



                {/**CAIXA DOS BOTÕES  */}
                <div className="bg-blue-300 mt-25">
                    <button
                        onClick={converterCelsius}
                        className=" bg-blue-500 hover:bg-blue-700 border-2 border-gray-500 text-5xl text-black  h-18  ">
                        <h1>Resultado</h1>
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
