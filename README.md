# lista telefônica
Projeto feito seguindo as intruções contidas no tweet: https://twitter.com/isam0ntingelli/status/1496115973212020737

# Instruções para execução do projeto
- Clone este repositório e importe o banco de dados do arquivo `listatelefonica.sql` (instruções para importar um bando de um arquivo .sql podem ser encontradas em `https://www.digitalocean.com/community/tutorials/how-to-import-and-export-databases-in-mysql-or-mariadb`) (caso o usuario do mysql não seja o root, modificar a conexão com o banco de dados em `backend/db/conn.js`);
- Após a criação do banco,  entre na pasta `backend` e execute `npm install` para baixar as dependencias e, após o download, execute `npm start` para rodar o server. Em seguida faça o mesmo procedimento com a pasta `frontend`. O backend será executado em `http://localhost:3001` e o frontend em `http://localhost:3000`.

# Stack
- Node/Express
- React
- Styled-components
- MySQL