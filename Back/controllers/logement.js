//Constantes Utiles
const Logement = require('../models/logement')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId

//Contrôleur de création
exports.createLogement = async (req, res) => {
    const newLogement = new Logement({
        userId: req.body.userId,
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        equipments: req.body.equipments,
        tags: req.body.tags,
        likers: [],
        comments: [],
    })

    try {
        const logement = await newLogement.save()
        return res.status(201).json(logement)
    } catch (err) {
        return res.status(400).send(err)
    }
}

//Contrôleur de crécupération de tout les logements
exports.getAllLogement = (req, res) => {
    Logement.find((err, docs) => {
        if (!err) res.send(docs)
        else console.log('Erreur de récupération des logements : ' + err)
    })
}

//Contrôleur de récupération d'un seul logement
exports.getOneLogement = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    Logement.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('ID unknown: ' + err)
    })
}

//Contrôleur de modification d'un logement
exports.updateLogement = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    const updateLog = {
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        equipments: req.body.equipments,
        tags: req.body.tags,
    }

    Logement.findByIdAndUpdate(
        req.params.id,
        {
            $set: updateLog,
        },
        {
            new: true,
        },
        (err, docs) => {
            if (!err) res.send(docs)
            else console.log('Update error: ' + err)
        }
    )
}

//Contrôleur de suppression d'un logement
exports.deleteLogement = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    Logement.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('Delete error: ' + err)
    })
}

//Contrôleur pour l'ajout d'un Like
exports.likeLogement = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        await Logement.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: { likers: req.body.id },
            },
            {
                new: true,
            }
        ).catch((err) => res.status(400).send(err))
        await User.findByIdAndUpdate(
            req.body.id,
            {
                $addToSet: { likes: req.params.id },
            },
            {
                new: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(400).send(err))
    } catch (err) {
        return res.status(400).send(err)
    }
}

//contrôleur pour la suppression d'un Like
exports.unlikeLogement = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        await Logement.findByIdAndUpdate(
            req.params.id,
            {
                $pull: { likers: req.body.id },
            },
            {
                new: true,
            }
        ).catch((err) => res.status(400).send(err))
        await User.findByIdAndUpdate(
            req.body.id,
            {
                $pull: { likes: req.params.id },
            },
            {
                new: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(400).send(err))
    } catch (err) {
        return res.status(400).send(err)
    }
}
