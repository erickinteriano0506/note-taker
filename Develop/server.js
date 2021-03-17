const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3500
;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(notes));

app.post('/api/characters', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));