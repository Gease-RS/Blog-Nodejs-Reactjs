const express = require('express');
const router = require('express').Router();

router.get('/comentarios/:postid', (req, res, next) => {
    res.json({
        conteudo: 'Gostei da sua postagem, continue assim',
        autor: 'Gen Bento Gonçalves'
    });
});

module.exports = router;