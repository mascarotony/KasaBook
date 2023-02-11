//Constantes Utiles
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

//Schéma du modèle utilisateur
const userSchema = mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 50,
            unique: true,
        },
        email: { type: String, required: true, unique: true },
        password: { type: String, minLength: 6, required: true },
        profilepic: {
            type: String,
            default: './uploads/profil/random-user.png',
        },
        bio: { type: String, maxLength: 1024 },
        followers: { type: [String] },
        following: { type: [String] },
        likes: { type: [String] },
    },
    {
        timestamps: true,
    }
)

//Validation pour mail unique
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
