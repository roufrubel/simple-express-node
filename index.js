const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from my first ever node revision again with ui');
});

const users = [
    {
        "id": 0,
        "name": "Leanne One",
        "username": "Bret",
        "email": "Sincere@april.biz",
        },
    {
        "id": 1,
        "name": "Leanne Two",
        "username": "Bret",
        "email": "Bincere@april.biz",
        },
    {
        "id": 2,
        "name": "Leanne Three",
        "username": "Bret",
        "email": "Gincere@april.biz",
    },
    {
        "id": 3,
        "name": "Leanne four",
        "username": "Bret",
        "email": "Gincere@april.biz",
    },
    {
        "id": 4,
        "name": "Leanne five",
        "username": "Bret",
        "email": "Gincere@april.biz",
    },
    {
        "id": 5,
        "name": "Leanne six",
        "username": "Bret",
        "email": "Gincere@april.biz",
    }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
})

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.listen(port, () => {
    console.log('listening to port', port);
});

