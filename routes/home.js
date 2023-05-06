const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const router = express.Router();

router.use(bodyParser.urlencoded({extended: false}));

const noteData = [];

router.get('/', (req,res,next) => {
    res.render('home', {pageTitle: 'Home Page', noteData, value:noteData});
});

router.post('/add',(req,res,next) => {
    const content = req.body.noteContent
    const Id = noteData.length + 1;
    noteData.push({Id, content});
    res.redirect('/');
});

router.post('/update',(req,res,next) => {
    const Id=req.body.noteId;
    const content = req.body.noteContent;
    
    noteData.forEach(note => {
        if(note.Id == Id) {
            note.content = content;
        }
    });
    res.redirect('/');
});

router.post('/delete',(req,res,next) => {
    const Id=req.body.noteId;
    noteData.forEach(note => {
        if(note.Id == Id) {
            noteData.splice((Id-1),1);
        }
    });
    res.redirect('/');
});


module.exports=router;