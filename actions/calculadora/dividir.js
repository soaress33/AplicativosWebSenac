"use server";

 export async function dividir(A, B){
    console.log("Estou Somando A com B veja abaixo.....");
    if (A!= "" && B!= ""){
      const dividir = parseFloat(A) / parseFloat(B)
      console.log("Resultado do dividir...." + dividir.toString())
      return {dividir: dividir.toString()};

    }
    
    return {error: "Erro ao Somar" };
 }

 async function executarTeste() {
    const resultado = await dividir(50, 2);
    console.log(resultado);
    
 }

 executarTeste();