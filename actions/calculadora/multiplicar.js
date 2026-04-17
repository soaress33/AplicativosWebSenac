"use server";

 export async function multiplicar(A, B){
    console.log("Estou Multiplicando A com B veja abaixo.....");
    if (A!= "" && B!= ""){
      const multiplicar = parseFloat(A) * parseFloat(B)
      console.log("Resultado do Multiplicar...." + multiplicar.toString())
      return {multiplicar: multiplicar.toString()};

    }
    
    return {error: "Erro ao Multiplicar" };
 }

 async function executarTeste() {
    const resultado = await multiplicar(50, 3);
    console.log(resultado);
    
 }

 executarTeste();