//Constantes Utiles
const mongoose = require('mongoose')

//Schéma du modèle Logement
const logementSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
        },
        pictures: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        equipments: {
            type: [String],
        },
        tags: {
            type: [String],
            required: true,
        },
        likers: {
            type: [String],
            required: true,
        },
        comments: {
            type: [
                {
                    commentId: String,
                    commentPseudo: String,
                    commentText: String,
                    timestamp: Number,
                },
            ],
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Logement', logementSchema)
