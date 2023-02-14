//Constantes Utiles
const User = require('../models/user')
const fs = require('fs')
const { promisify } = require('util')
const { uploadErrors } = require('../utils/errors')
const pipeline = promisify(require('stream').pipeline)

//Contrôleur d'ajout d'une photo de profil
exports.uploadProfil = async (req, res) => {
    try {
        if (
            req.file.detectedMimeType !== 'image/JPG' &&
            req.file.detectedMimeType !== 'image/PNG' &&
            req.file.detectedMimeType !== 'image/JPEG'
        )
            throw Error('Invalid file type')

        if (req.file.size > 500000) throw Error('Max size limit')
    } catch (err) {
        const errors = uploadErrors(err)
        return res.status(201).json({ errors })
    }

    const fileName = req.body.name + '.jpg'

    await pipeline(
        req.file.stream,
        fs.createWriteStream(
            `${__dirname}/../client/public/uploads/profil/${fileName}`
        )
    )

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
