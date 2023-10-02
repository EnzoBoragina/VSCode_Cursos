let valor = [8, 1, 7, 4, 2, 9]
valor.sort()

/*for (let pos = 0; pos < valor.length; pos++){
    console.log(`A posicção do vetor ${pos} tem o valor ${valor[pos]}`)
}*/

for (let pos in valor){
    console.log(`A posicção do vetor ${pos} tem o valor ${valor[pos]}`)   
}