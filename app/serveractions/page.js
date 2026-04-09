"use client"

import Link from "next/link";
let contador = 0;

export default function Home() {

     function Cliente() {

        try {
            console.clear()
            console.log("\n\n")
            console.log("Console limpo e ação executada no FrontEnd")
            console.log("Estou no Cliente....: " + contador++);
            console.log("Só funciono no Front-End meu amigo....");
            console.log("\n\n")

        } catch {

            console.log("Erro ao Tentar Logar 2")

        } finally {

            console.log("Fim de Execução da Action no Front End")
        }
    }


     function ChamaServidor() {
    

        try {

            console.log("Chamou o Servidor")

        } catch {

            console.log("Erro ao tentar logar 2")

        } finally {

            console.log("Login Terminou")

        }
    }






    return ( 
        <div className="bg-black items-center flex justify-center w-screen h-screen">
            <div className="bg-white w-130 flex items-center rounded-2xl flex-col h-90">
                <div className=" text-4xl font-bold flex justify-center mt-5 items-center text-black h-20">
                    <h1>Server Action</h1>
                </div>

                <div className="flex items-center font-bold flex-col">

                    <button
                        onClick={ChamaServidor}
                        type="button"
                        className="bg-blue-600 border border-black mt-5 w-110 h-13">Ações Clientes (Front-END)
                    </button>


                    <button
                        onClick={Cliente}
                        type="button"
                        className="bg-green-800 border border-black mt-5 w-110 h-13">Acesso ao Servidor (Back-END)
                    </button>


                    <Link href={"/principal"}>
                        <button className="bg-red-500 border border-black mt-5 w-110 h-13">Dashbord</button>
                    </Link>
                </div>
            </div>




        </div>
    );
}
