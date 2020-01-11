const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const data = [
    {
        id: 1,
        msg: 'Message1',
        date: new Date(),
    },
    {
        id: 2,
        msg: 'Message2',
        date: new Date(),
    },
    {
        id: 3,
        msg: 'Message3',
        date: new Date(),
    },
    {
        id: 4,
        msg: 'Message3',
        date: new Date(),
    }
]

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json(data);
});

app.post('/', (req, res) => {
    data.push(req.body);
    res.json(data[data.length - 1]);
});

app.delete('/:id', (req, res) => {
    let index = -1;
    console.log(req.params);
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == req.params.id) {
            index = i;
        }
    }
    data.splice(index, 1);
    res.json(data);
});

const port =  4000;

app.listen(port, () => {
    console.log(`listening on ${port}`);
});