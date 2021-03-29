const res = async ()=> {
fetch('https://mini-server-cotacao.herokuapp.com/api/v1/cotacao',
    {
        
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept-Charset' : 'utf-8',

        })
    })
    .then(res => {
        console.log("Status "+ res.status)
        res.json().then( x => console.log(x))
    })
        
    //const resJSON = resp.json()
    //console.log(resJSON)
}
    
res()
    //.catch(err => console.log(`Deu ruim, o erro é: ${err}`))