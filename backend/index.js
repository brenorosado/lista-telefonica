const express = require('express');
const pool = require('./db/conn');

const PORT = 3000;

const app = express();

// app.use(
//     express.urlencoded({
//         extended: true,
//     }),
// );

// app.use(express.json());

// app.use(express.static('public'));

// get all contancts from database
app.get('/listatelefonica', (req, res) => {
    const query = 'SELECT * FROM lista';

    pool.query(query, (err, data) => {
        if(err) {
            console.log(err);
            return;
        };
        
        res.send(data);
    });
});

//get especific contact from database
app.get('/contact/:id', (req, res) => {
    const query = 'SELECT * FROM lista WHERE ?? = ?';
    const data = ['id', req.params.id];

    pool.query(query, data,(err, data) => {
        if(err) {
            console.log(err);
            return;
        };
         
        res.send(data);
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));