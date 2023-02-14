//Constantes Utiles
const express = require('express')
const router = express.Router()

//Constante pour le contrôleur
const logementCtrl = require('../controllers/logement.js')

//Création des routes de l'API
router.post('/', logementCtrl.createLogement) //1 -> Création Logement
router.get('/', logementCtrl.getAllLogement) //2 -> Récupération Logements
router.get('/:id', logementCtrl.getOneLogement) //3 -> Récupération Logement
router.put('/:id', logementCtrl.updateLogement) //4 -> Mise à jour Logement
router.delete('/:id', logementCtrl.deleteLogement) //5 -> Suppression Logement
router.patch('/like-log/:id', logementCtrl.likeLogement) //6 -> Ajout d'un Like
router.patch('/unlike-log/:id', logementCtrl.unlikeLogement) //7 -> Suppression d'un Like
router.patch('/comment-log/:id', logementCtrl.commentLog) //8 -> Ajout d'un commentaire
router.patch('/edit-comment-log/:id', logementCtrl.editCommentLog) //9 -> Modification d'un commentaire
router.patch('/delete-comment-log/:id', logementCtrl.deleteCommentLog) //10 -> Suppresion d'un commentaire

module.exports = router
