"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";




export default function Home() {

    return (
        <div className="bg-white items-center  grid grid-col md:grid-cols-2  justify-center w-screen h-screen">
            <div className="bg-white h-screen flex justify-center items-center">
                {/*caixa Sistema */}
                <div className=" lg:text-black lg:w-110 lg:items-center lg:flex-col lg:justify-center lg:flex">
                    <h1 className="text-3xl font-bold">MEU SISTEMA</h1>
                    <p>Gerencie sua vida, vendas e resultado de forma simples e</p>
                    <p>eficiente</p>
                </div>
            </div>
            <div className="bg-gray-400 h-screen flex flex-col items-center justify-center ">
                {/*Caixa de Login */}
                <div className="bg-white text-black rounded-2xl items-center flex flex-col  w-110 h-95">
                    <div className=" flex justify-center items-center font-bold text-3xl h-20">
                        <h1>Login </h1>
                    </div>
                    <div className="  text-2xl  font-bold h-20">
                        <div className="">
                            <h1>User</h1>
                            <input className="bg-white border-2 w-90 h-12 border-black"></input>
                        </div>

                        <div className="mt-7">
                            <h1>Password</h1>
                            <input type="password" className="bg-white border-2 h-12 w-90   border-black"></input>
                        </div>
                        <button className="bg-green-500 text-white text-xl hover:bg-green-400  w-90 h-10 mt-7 rounded">Entrar</button>
                    </div>
                </div>
                <div className="text-black justify-center flex flex-col items-center w-110 h-20 mt-1">
                    <p>@ 2026 Júnior Soares</p>
                    <p>Todos os direitos reservados</p>
                </div>
            </div>

        </div>
    );
}
