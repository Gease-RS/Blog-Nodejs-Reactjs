const express = require('express');
const router = require('express').Router();

router.get('/anuncios', (req, res, next) => {
    res.json({
        titulo: 'Meu primeiro anúncio',
        conteudo: 'Primeira publicação em postagens',
        autor: 'Gease Oliveira da Rosa'
    });
});

module.exports = router;