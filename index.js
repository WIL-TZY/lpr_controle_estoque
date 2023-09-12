const express = require('express');
const cors = require('cors');
const app = express();

// Ativando o CORS para todas as rotas
app.use(cors());

// Servir arquivos estáticos localizados na pasta "public" usando o Express
app.use(express.static('public'));

// Lógicas de rota e servidor
app.get('/hello', (req, res) => { // Apenas um teste
    // http://localhost:3000/hello
    res.send('Hello, World!');
});

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});