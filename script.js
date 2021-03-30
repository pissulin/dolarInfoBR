const res = async ()=> {
 const res = await fetch('https://mini-server-cotacao.herokuapp.com/api/v1/cotacao')
    
    const resu =  await res.json()

  //  const arrayResu = [...resu]
        
     document.querySelector('.dolarComercial').innerHTML = resu[0].valor
     document.querySelector('.dolarTurismo').innerHTML = resu[1].valor
     document.querySelector('.dolarTpax').innerHTML = resu[2].valor
     document.querySelector('.euroComercial').innerHTML = resu[3].valor
     document.querySelector('.dolarXeuro').innerHTML = resu[4].valor    
    
}
    
res()


function converterMoedas(){
    const moeda1 = document.getElementById('moedas1').value

    let inputMoeda1 = Number(document.getElementById('moeda1').value)
       
    const inputMoeda2 = (document.getElementById('moeda2').value).replace(",", ".")

    if(moeda1 ==="dolarComercial"){
        const dolar = (document.querySelector('.dolarComercial').innerHTML).replace(",", ".")
      
        let resConversao = (inputMoeda1 * parseFloat(dolar).toFixed(2)).toFixed(2) 
        let resConversaoString = resConversao.toString()

        document.getElementById('moeda2').value = resConversaoString 
    }
    if(moeda1 ==="dolarTurismo"){
        const dolar = (document.querySelector('.dolarTurismo').innerHTML).replace(",", ".")
      
        let resConversao = (inputMoeda1 * parseFloat(dolar).toFixed(2)).toFixed(2) 
        let resConversaoString = resConversao.toString()

        document.getElementById('moeda2').value = resConversaoString 
    }
    
}

function converterRealParaDolar(){
    //pegando as moedas selecionadas 
    const moeda1 = document.getElementById('moedas1').value
    const moeda2 = document.getElementById('moedas2').value
    
    //pegando valor do inpur moeda2
    const valorInputMoeda2 = document.getElementById('moeda2').value

    //pegando a cotacao da moaeda1 selecionanda
    const cotacao = parseFloat((document.querySelector(`.${moeda1}`).innerHTML).replace(",",".")).toFixed(2)

    const soma = (parseFloat(valorInputMoeda2) / cotacao).toFixed(2)
      
    document.getElementById('moeda1').value = soma.toString()
}
