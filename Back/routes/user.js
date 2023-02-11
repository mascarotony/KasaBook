//Constantes Utiles
const express = require('express')
const router = express.Router()

//Constante pour le contrôleur
const userCtrl = require('../controllers/user')

//Création des routes de l'API
router.post('/user/signup', userCtrl.signup) //1 -> Inscription
router.post('/user/login', userCtrl.login) //2 -> Connexion
router.get('/user', userCtrl.getAllUsers) //3 -> Récupération Users
router.get('/user/:id', userCtrl.getInfo) //4 -> Récupération User
router.put('/user/:id', userCtrl.updateUser) //5 -> Mise à Jour User
router.delete('/user/:id', userCtrl.deleteUser) //6 -> Suppression User
router.patch('/user/follow/:id', userCtrl.follow) //7 -> Ajout d'un follow
router.patch('/user/unfollow/:id', userCtrl.unfollow) //8 -> Suppression d'un follow

module.exports = router
