const arrayX = [7, 6, 5, 4, 3, 2, 1, 8, 9];
const array = [7, 3, 1, 3, 7];

function findSmallNumber(arrayX: number[]):number {
    let smallNumber = arrayX[0];
    let indexSmallNumber = 0;
    let arrayLen = arrayX.length;

    console.log("function iniciada");
    console.log(`Tamanho do array: ${arrayLen}`);
    
    for (let i = 0; i < arrayLen; i++){
        if ( arrayX[i] < smallNumber ) {
            smallNumber = arrayX[i];
            indexSmallNumber = i;

            console.log(`Executando if; valor de i: ${i}`)
            console.log(`Atualização - menor número é: ${smallNumber} index do menor número: ${indexSmallNumber}`)
        }
        
        else {
            console.log(`Executando else; valor de i: ${i}`)
            console.log(`Atualização - menor número é: ${smallNumber} index do menor número: ${indexSmallNumber}`)
        }
    }
    console.log(`Função encerrada, retornando o menorIndice: ${indexSmallNumber}`)
    return indexSmallNumber;
}




function orderBy(array:number[]):number[] {
    let newArray:number[] = [];
    const ArrayLen = array.length;


    for (let i = 0; i < ArrayLen; i++){
        let smallNumber = findSmallNumber(array);
        newArray.push(array.splice(smallNumber,1)[0]);
    }

    console.log(newArray)
    return newArray
}

orderBy(arrayX);