import Image from "next/image";
import Link from "next/link";
import { LucideClipboardList } from "lucide-react";



export default function Home() {

   // const [alunos, setAlunos] = useState([]);
   // const [nome, setNome] = useState("");
   // const [email, setEmail] = useState("");
   // const [celular, setCelular] = useState("");
    ///const [curso, setCurso] = useState("");

   ;//; const [editIndex, setEditIndex] = useState(null);
    




    return (
        <div className="bg-black items-center flex-col flex justify-center w-screen h-screen">
            <div className="bg-black w-190 items-center flex flex-col rounded-2xl ">
                <div className="mt-2 items-center justify-center flex-col flex text-3xl font-black ">
                    <h1>Cadastro de Alunos Senac Competição</h1>
                    <p className="text-orange-500 text-xl">Etapa Escolar Lavras-MG</p>
                </div>

                <div className="justify-center  fle mt-5 flex">
                    <div className="">
                        <input
                            placeholder="Nome"
                            className="border-2 me-1 p-1 rounded h-10 w-92"></input>

                        <input
                            placeholder="Email"
                            className="border-2 p-1 ml-1 rounded h-10 w-92"></input>
                    </div>
                </div>

                <div className="justify-center  fle mt-3 flex">
                    <div className="">
                        <input
                            placeholder="Celular"
                            className="border-2 me-1 p-1 rounded h-10 w-92"></input>

                        <input
                            placeholder="Curso"
                            className="border-2 p-1 ml-1 rounded h-10 w-92"></input>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-400 mt-4  w-185 rounded  h-12">Cadastrar</button>

                {/**Tabela */}
                <div className=" w-190 mt-4 flex p-2 pl-2 items-center justify-center ">
                    <table className="w-full ">
                        <tr className="w-full h-10 justify-center border-white border-2  bg-amber-50  items-center font-black text-black">
                            <td className="text-center">Nome</td>
                            <td className="text-center">Email</td>
                            <td className="text-center">Celular</td>
                            <td className="text-center">Curso</td>
                            <td className="text-center">Ações</td>
                        </tr>

                        <tr className="w-full h-10 justify-center ml-10      border bg-black items-center font-black text-white">
                            <td className="text-center border">Nome</td>
                            <td className="text-center border">Email</td>
                            <td className="text-center border">Celular</td>
                            <td className="text-center border">Ações</td>
                            <td className="flex items-center justify-center mt-2     gap-2">
                                <button className="bg-yellow-500 hover:bg-yellow-400 rounded w-18">Editar</button>
                                <button className="bg-red-500 hover:bg-red-400  rounded w-18">Deletar</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
