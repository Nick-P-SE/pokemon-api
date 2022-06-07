const { request } = require('express')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

const pokemon = {
    'bulbasaur': {
        'type': ['grass', 'poison'],
        'dexNumber': 1,
        'color': 'green',
        'hasEvo': true,
    },
    'ivysaur': {
        'type': ['grass', 'poison'],
        'dexNumber': 2,
        'color': 'green',
        'hasEvo': true,
    },
    'venusaur': {
        'type': ['grass', 'poison'],
        'dexNumber': 3,
        'color': 'green',
        'hasEvo': false,
    },
    'unknown': {
        'type': ['unknown'],
        'dexNumber': 'unknown',
        'color': 'unknown',
        'hasEvo': 'unknown',
    },
}
app.get('/' , (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) =>{
    const pokeName = request.params.name.toLowerCase()
    if( pokemon[pokeName] ){
        response.json( pokemon[pokeName] )
    }else{
        response.json( pokemon['unknown'] )
    }
})


app.listen(process.env.PORT || PORT , ()=>{
    console.log(`The Server is running on port ${PORT}`)
})