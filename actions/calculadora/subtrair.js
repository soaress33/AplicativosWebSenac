"use server";

 export async function subtrair(A, B){
    console.log("Estou subtraindo A com B veja abaixo.....");
    if (A!= "" && B!= ""){
      const subtrair = parseFloat(A) - parseFloat(B)
      console.log("Resultado do Subtraindo...." + subtrair.toString())
      return {subtrair: subtrair.toString()};

    }
    
    return {error: "Erro ao Subtrair" };
 }

 async function executarTeste() {
    const resultado = await subtrair(50, 10);
    console.log(resultado);
    
 }

 executarTeste();