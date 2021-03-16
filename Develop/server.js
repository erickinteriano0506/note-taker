const express = require('express');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3500
;



app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));





app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));