import Image from "next/image";
import Link from "next/link";


export default function Home() {
    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 w-130 flex-col items-center border-black  flex border-2 rounded-2xl h-180">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-4xl">Cadastro de produtos </h1>
                    <p className="text-red-700 font-bold">Preencha todos os campos abaixo</p>
                </div>
                {/*caixa das input*/}
                <div className="">
                    <div className=" w-100 h-10 font-bold me-20 -mt-10">
                        <h1>| Lembra de prencher os dados corretamente !!!</h1>
                    </div>
                    <div className=" w-90 font-bold me-30 ">
                        <h1>1. Nome do Produto</h1>
                        <input placeholder="ex" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <h1>2. Codigo do Produto</h1>
                        <input placeholder="ex" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <div className="  flex w-90 font-bold me-30 mt-5 ">
                        <div className="">
                            <h1>3. Preço (R$)</h1>
                            <input placeholder="ex" className="bg-white w-50  h-7 mt-2 border-2 border-black"></input>
                        </div>
                        <div className=" ml-20">
                            <h1>4. Quantidade de Estoque </h1>
                            <input placeholder="ex" className="bg-white w-50  h-7 mt-2 border-2 border-black"></input>
                        </div>
                    </div>


                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <h1>5. Categoria</h1>
                        <input  placeholder="ex" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <h1>6. Deescrição do Produto</h1>
                        <input placeholder="ex" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <button className=" bg-green-400 hover:bg-green-600 border-2 border-gray-500 text-white w-120 h-8 mt-10 ">
                        <h1>CONCLUIDO</h1>
                    </button>

                    <Link href={"/"} >
                        <div className=" font-bold text-xs items-center flex justify-center mt-2">
                            <h1>VOLTA PARA O MENU PRINCIPAL</h1>
                        </div>
                    </Link>

                </div>









            </div>
        </div>
    );
}
