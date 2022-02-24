# lista telefônica
Projeto feito seguindo as intruções contidas no tweet: https://twitter.com/isam0ntingelli/status/1496115973212020737

# Instruções para execução do projeto
- Para criar o banco de dados local utilize os seguintes comandos:
    CREATE SCHEMA `listatelefoncia`;
    CREATE TABLE `listatelefoncia`.`lista` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(255) NOT NULL,
        `email` VARCHAR(255) NOT NULL,
        `phone` VARCHAR(14) NOT NULL,
        `image` LONGBLOB NULL,
        PRIMARY KEY (`id`));

- Após a criação do banco, clone este repositório e entre na pasta 'backend' e execute npm install para baixar as dependencias e, após o download, execute npm start para rodar o server. Em seguida faça o mesmo procedimento com a pasta 'frontend'. O backend será executado em http://localhost:3001 e o frontend em http://localhost:3000 

# Stack
- Node/Express
- React
- Styled-components
- MySQL