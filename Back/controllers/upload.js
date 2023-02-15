//Constantes Utiles
const User = require('../models/user')
const fs = require('fs')
const { uploadErrors } = require('../utils/errors')

//Contrôleur d'ajout d'une photo de profil
exports.uploadProfil = async (req, res) => {
    try {
        if (req.file.size > 500000) throw Error('Max size limit')
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(201).json({ errors })
    }

    const fileName = req.body.name + '.jpg'

    await (req.file.stream,
    fs.createWriteStream(`../client/public/uploads/profil/${fileName}`))

    try {
        await User.findByIdAndUpdate(
            req.body.userId,
            {
                $set: { profilepic: './uploads/profil/' + fileName },
            },
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }
        )
            .then((docs) => res.send(docs))
            .catch((err) => res.status(400).send(err))
    } catch (err) {
        res.status(400).send(err)
    }
}
