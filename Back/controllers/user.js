//Constantes utiles
const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const salt = 10
const ObjectId = require('mongoose').Types.ObjectId

//Constante pour le .env
dotenv.config()

//Contrôleur d'inscription
exports.signup = (req, res, next) => {
    bcrypt
        .hash(req.body.password, salt)
        .then((hash) => {
            const user = new User({
                pseudo: req.body.pseudo,
                email: req.body.email,
                password: hash,
            })
            user.save()
                .then(() =>
                    res.status(201).json({ message: 'Utilisateur créé !' })
                )
                .catch((error) => res.status(400).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
}

//Contrôleur de Connexion
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res
                    .status(401)
                    .json({ error: 'Utilisateur non trouvé !' })
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res
                            .status(401)
                            .json({ error: 'Mot de passe incorrect !' })
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.JWTPRIVATEKEY,
                            { expiresIn: '24h' }
                        ),
                    })
                })
                .catch((error) => res.status(500).json({ error }))
        })
        .catch((error) => res.status(500).json({ error }))
}

//Contrôleur de récupération de tout les Users
exports.getAllUsers = async (req, res) => {
    const users = await User.find().select('-password')
    return res.status(200).json(users)
}

//Contrôleur de récupération d'un User
exports.getInfo = (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    User.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs)
        else console.log('ID unknown: ' + err)
    }).select('-password')
}

//Contrôleur de modification d'un user
exports.updateUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        await User.findOneAndUpdate(
            {
                _id: req.params.id,
            },
            {
                $set: {
                    bio: req.body.bio,
                },
            },
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(500).send({ message: err }))
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}

//Contrôleur de suppression d'un User
exports.deleteUser = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        await User.remove({ _id: req.params.id }).exec()
        res.status(200).json({ message: 'Profil supprimé !' })
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}

//Contrôleur pour ajout d'un follow
exports.follow = async (req, res) => {
    if (
        !ObjectId.isValid(req.params.id) ||
        !ObjectId.isValid(req.body.idToFollow)
    )
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        //Ajout à la liste des followers
        await User.findByIdAndUpdate(
            req.params.id,
            {
                $addToSet: { following: req.body.idToFollow },
            },
            {
                new: true,
                upsert: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(500).send({ message: err }))

        //Ajout à la liste des following
        await User.findByIdAndUpdate(
            req.body.idToFollow,
            { $addToSet: { followers: req.params.id } },
            {
                new: true,
                upsert: true,
            }
        ).catch((err) => res.status(500).send({ message: err }))
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}

//Contrôleur pour la suppression d'un follow
exports.unfollow = async (req, res) => {
    if (
        !ObjectId.isValid(req.params.id) ||
        !ObjectId.isValid(req.body.idToUnfollow)
    )
        return res.status(400).send('ID unknown: ' + req.params.id)

    try {
        //Suppression de la liste des followers
        await User.findByIdAndUpdate(
            req.params.id,
            {
                $pull: { following: req.body.idToUnfollow },
            },
            {
                new: true,
                upsert: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(500).send({ message: err }))

        //Suppression de la liste des following
        await User.findByIdAndUpdate(
            req.body.idToUnfollow,
            { $pull: { followers: req.params.id } },
            {
                new: true,
                upsert: true,
            }
        ).catch((err) => res.status(500).send({ message: err }))
    } catch (err) {
        return res.status(500).send({ message: err })
    }
}
