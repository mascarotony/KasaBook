//Constantes Utiles
const express = require('express');
const router = express.Router();

//Constante pour le contrôleur
const userCtrl = require('../controllers/user');

//Création des routes de l'API pour 1-Inscription 2-Connexion
router.post('/signup', userCtrl.signup); //1
router.post('/login', userCtrl.login); //2

module.exports = router;