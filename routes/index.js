const express = require('express');
const router = require('express').Router();

router.use('/', require('./anuncios'));

router.use('/', require('./comentarios'));

router.use('/', require('./postagens'));

module.exports = router