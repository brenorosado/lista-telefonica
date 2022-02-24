const express = require('express');
const pool = require('./db/conn');
const cors = require('cors');

const PORT = 3001;

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static('public'));

app.use(cors());

// get all contancts from database
app.get('/contatos', (req, res) => {
    const query = 'SELECT * FROM lista';

    pool.query(query, (err, data) => {
        if(err) {
            console.log(err);
            return;
        };
        
        res.json({ data });
    });
});

//get especific contact from database
app.get('/contatos/:id', (req, res) => {
    const query = 'SELECT * FROM lista WHERE ?? = ?';
    const data = ['id', req.params.id];

    pool.query(query, data,(err, data) => {
        if(err) {
            console.log(err);
            return;
        };
         
        res.json({ data });
    });
});

//add an contact to database
app.post('/contatos/cadastrar', (req, res) => {
    const { name, email, phone, image } = req.body;

    const query = `INSERT INTO lista (??, ??, ??, ??) VALUES (?, ?, ?, ?)`;
    const data = ['name', 'email', 'phone', 'image', name, email, phone, image];

    pool.query(query, data, (err) => {
        if (err) {
            console.log(err);
            return;
        };
    });

    res.json({ message: 'Contato registrado'});
});

//delete an contact from database
app.delete('/contatos/deletar/:id', (req, res) => {
    const id  = req.params.id;

    const query = `DELETE FROM lista WHERE ?? = ?`;
    const data = ['id', id];

    pool.query(query, data, (err) => {
        if (err) {
            console.log(err);
            return;
        };
        
        res.json({ message: `Contato de id ${id} deletado`});
    });
});

//update an contact from database
app.put('/contatos/editar', (req, res) => {
    const { name, email, phone, image, id } = req.body;

    const query = `UPDATE lista SET ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ['name', name, 'email', email, 'phone', phone, 'image', image, 'id', id];

    pool.query(query, data, (err) => {
        if (err) {
            console.log(err);
            return;
        };

        res.json({ message: `Contato de id ${id} atualizado`});
    })
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));