const router = require("express").Router();
const fs = require('fs');

const notesLength = () => {
    let data = fs.readFileSync('./db/db.json', 'UTF8');
    data = JSON.parse(data);
    return data.length;
} 

router.get('/', (req, res) => {
    fs.readFile('./db/db.json', 'UTF8', (err, data) => {
        if (err) throw err;
        const newData = JSON.parse(data);
        res.json(newData);
    })
})

router.post('/', (req, res) => {
    if(!noteId) noteId = notesLength();
    var noteId = Number(noteId);
    noteId += 1;
    req.body.id = noteId;
    fs.readFile('./db/db.json', 'UTF8', (err, data) => {
        if (err) throw err;
        const newData = JSON.parse(data);
        const newNote = req.body;
        newData.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;
            res.json(newData);
        })
    })
})






module.exports = router




// 