//inicia o servidor e escuta cada requisição.
import app from './src/app.js'
//cria uma porta no computador que vai escutar as requisições
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Servidor escutando em http//:localhost:${port}`)
})

