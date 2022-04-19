const http = require('http');
const port = 3000;
 
const server = http.createServer((req, res) => { //recebe uma funcao de callback, onde é passado como parametro a requisicao e a resposta
   res.writeHead(200, { 'Content-Type' : 'text/plain' }); //conteudo da funcao de callback
   res.end('Curso de NodeJS com React') //exibe na página
} )

server.listen(port, ( ) => {
   console.log(`Servidor rodando em: http://localhost:${port}`) //roda o servidor
})