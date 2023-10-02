function verificar(){

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByTagName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].ariaChecked){
            genero = 'Homem'
        } else if (fsex[1].ariaChecked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`

    }
        
}