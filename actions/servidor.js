"use server";

//declaração de variaveis globais

let contador = 0;

export async function servidor() {
try {

console.clear()
console.log("\n\n")
console.log("Console limpo e ação executando no Back END")
console.log("Estou no Servidor.... " + contador++);
console.log("Só funciona no servidor Back-End meu amigo..... ");
console.log("\n\n")

} catch {

    console.log("Deu errado no Servidor");
}finally{
console.log("Ação Concluida no Servidor");
console.log("\n\n")

}
  
}