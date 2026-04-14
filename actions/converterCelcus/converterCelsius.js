"use server";

export async function converterCelsius(A) {
    console.log("Convertendo Celcius para Fahrenheit");

    if (A!= "") {

        const converter = (parseFloat(A) * 1.8 + 32);
        console.log("Valor de Fahrenheit:" + converter.toString());

    }
}

//async function executarTeste() {
  //  const resultado = converterCelsius(200);
    //console.log(resultado);

//}

//executarTeste();