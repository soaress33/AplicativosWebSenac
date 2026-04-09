"use server";

export async function login(nome,senha) {
    console.log("Estou no Servidor....")
     if(nome === "1" && senha === "1"){
        console.log("Dados Corretos ...")
        return{success: true};
     }    

     return{error: "Login Invalido"};
}