let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


//verifica se o numero esta entre 1 e 100
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

//Verifica se o numero esta na lista
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//função do botao adicionar (adiciona numeros nas tabelas) 
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adcionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('[ERRO] VALOR INVALIDO OU JA ADCIONADO')
    }
    num.value = ''
    num.focus()    
}



//Botao de finalizar que mostra a soma, media, maior e menor valor e a quantidade de numeros no vetor
function finalizar(){
    if (valores.length == 0){
        window,alert('Adicione valores antes de finalizar')
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let pos in valores){
            soma += valores[pos]
            if( valores[pos] > maior){
                maior = valores[pos]
            }
            if( valores[pos]< menor){
                menor = valores[pos]
            }
        }
        
        media = soma / tot 
        
        res.innerHTML = '' 
        res.innerHTML += `<p>Ao todo temos ${tot} número cadastrados.</p>`
        res.innerHTML += `<p>O maior número adicionado foi ${maior}</p>`
        res.innerHTML += `<p>O menor número adicionado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os número temos ${soma}</p>`
        res.innerHTML += `<p>A media dos número é ${media}</p>`   
    }
}