// server.js
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware

const corsOptions = {
  origin: 'https://tarifaminima.top', // Substitua pelo seu domínio
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());

// Rotas com prefixo /historia
app.use('/historia/api', apiRoutes); // Adicione o prefixo aqui!

// Conectar ao banco de dados e iniciar o servidor
db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });