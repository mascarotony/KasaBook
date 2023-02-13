//Constantes Utiles
const express = require('express')
const router = express.Router()

//Constante pour le contrôleur
const userCtrl = require('../controllers/user')

//Création des routes de l'API
router.post('/signup', userCtrl.signup) //1 -> Inscription
router.post('/login', userCtrl.login) //2 -> Connexion
router.get('/', userCtrl.getAllUsers) //3 -> Récupération Users
router.get('/:id', userCtrl.getInfo) //4 -> Récupération User
router.put('/:id', userCtrl.updateUser) //5 -> Mise à Jour User
router.delete('/:id', userCtrl.deleteUser) //6 -> Suppression User
router.patch('/follow/:id', userCtrl.follow) //7 -> Ajout d'un follow
router.patch('/unfollow/:id', userCtrl.unfollow) //8 -> Suppression d'un follow

module.exports = router
