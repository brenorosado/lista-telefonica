const express = require('express');
const pool = require('./db/conn');
const cors = require('cors');

const PORT = 3001;

const app = express();

// app.use(
//     express.urlencoded({
//         extended: true,
//     }),
// );

app.use(express.json());

// app.use(express.static('public'));

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));