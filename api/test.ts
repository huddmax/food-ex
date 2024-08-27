const arr = [7,6,5,4,3,2,1,2,3,4,5,6,7,8,9]

function buscaMenor(arr: number[]):number {
    let menor = arr[0];
    let menorIndice = 0;
    let arrLen = arr.length;

    console.log("function buscaMenor executada");
    console.log(`Tamanho do array: ${arrLen}`);
    
    for (let i = 0; i < arrLen; i++){
        if ( arr[i] < menor ) {
            menor = arr[i];
            menorIndice = i;

            console.log(`Executando if; valor de i: ${i}`)
            console.log(`Atualização: Valor de menor é: ${menor} menorIndice é: ${menorIndice}`)
        }
        
        else {
            console.log(`Executando else; valor de i: ${i}`)
            console.log(`Atualização: Valor de menor é: ${menor} menorIndice é: ${menorIndice}`)
        }
    }
    console.log(`Função encerrada, retornando o menorIndice: ${menorIndice}`)
    return menorIndice;
}

buscaMenor(arr);