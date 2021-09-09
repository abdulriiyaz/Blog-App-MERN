//const { Router } = require('express');
const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

//get all articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
}); 

//add new article
router.post('/add', (req, res) => {
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });
    
    newArticle.save()
    .then(() => res.json("The New Article posted successfully!"))
    .catch(err => res.status(400).json(`Error ${err}`));
});

module.exports = router;