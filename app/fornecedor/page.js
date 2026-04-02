import Image from "next/image";


export default function Home() {
    return (
        <div className="bg-white items-center flex justify-center w-screen h-screen">
            <div className="bg-gray-400 border-black w-130 flex-col items-center   flex border-2 rounded-2xl h-140">
                <div className=" w-110 flex-col justify-center items-center flex h-50 ml-8 ">
                    <h1 className="font-bold text-4xl">Cadastro do Fornecedor </h1>
                    <p className="text-red-700 font-bold">Preencha todos os campos abaixo</p>
                </div>
                {/*caixa das input*/}
                <div className="">
                    <div className=" w-100 h-10 font-bold me-20 -mt-10">
                        <h1>| Lembra de prencher os dados corretamente !!!</h1>
                    </div>
                    <div className=" w-90 font-bold me-30 ">
                        <h1>1. Nome do Fornecedor</h1>
                        <input placeholder="" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <div className=" w-90 font-bold me-30 mt-5 ">
                        <h1>2. CNPJ</h1>
                        <input placeholder="" className="bg-white w-120 mt-2 border-2 border-black"></input>
                    </div>

                    <div className="  flex w-90 font-bold me-30 mt-5 ">
                        <div className="">
                            <h1>3.Telefone</h1>
                            <input placeholder="(11)3333-3333" type="N  umeric" className="bg-white w-120  h-7 mt-2 border-2 border-black"></input>
                        </div>

                    </div>


                         <button className=" bg-green-400 hover:bg-green-600 border-2 border-gray-500 text-white w-120 h-8 mt-10 ">
                        <h1>CONCLUIDO</h1>
                    </button>
                    <div className="bg-amber-400 items-center flex justify-center">
                        <h1>das</h1> 
                    </div>

                </div>









            </div>
        </div>
    );
}

