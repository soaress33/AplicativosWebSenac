import Image from "next/image";
import Link from "next/link";
import { LucideClipboardList } from "lucide-react";



export default function Home() {
    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-300 items-center flex flex-col rounded-2xl w-200 h-174">
                <div className=" mt-3   -ml-100 flex">
                    <div className="bg-blue-200 rounded-2xl ">
                        <LucideClipboardList className="h-12 w-auto text-[#4559D9]"></LucideClipboardList>
                    </div>
                    <div className="ml-3">
                        <h1 className="text-3xl font-bold text-black">Minhas Tarefas</h1>
                        <p className="-mt-2 text-gray-500">Gerencie suas tarefas de formas simples</p>
                    </div>
                </div>
                <div className="bg-white w-185 border rounded-2xl mt-5 border-gray-300 h-90">
                    <h1 className="text-black ml-2 mt-2 text-2xl">Nova tarefa</h1>
                    <div className=" text-black ml-2 mt-3">
                        <h1>Tarefas</h1>
                        <input className="w-180 h-11 border-black rounded border"></input>
                    </div>

                    <div className=" flex   text-black ml-2 mt-3">
                        <div className="">
                            <h1>Data</h1>
                            <input
                                type="date"
                                placeholder="dd/mm/aaaa"
                                className="w-86 h-11 p-2 rounded border-black border"></input>
                        </div>

                        <div className="ml-8 ">
                            <h1>Horário</h1>
                            <input
                                type="time"
                                placeholder="--:--"
                                className="w-86 h-11 p-2 rounded border-black border"></input>
                        </div>
                    </div>


                    <div className=" text-black ml-2 mt-3">
                        <h1>Status</h1>
                        <input className="w-180 h-11 rounded border-black border">


                        </input>
                    </div>
                    <button className="bg-[#3B57DD] w-40 h-10 flex items-center justify-center hover:bg-blue-500 mt-4 ml-2 rounded">
                        <p >+</p>
                        <p className="ml-3">Adicionar</p>
                    </button>
                </div>

                <div className="bg-white w-185 mt-4 rounded-2xl h-50"></div>

            </div>


        </div>
    );
}
