const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/cardapio', (req, res) => {
  res.sendFile(path.join(__dirname, 'cardapio.html'));
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'contato.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server está rodando na porta ${port}`);
});
