//Constantes Utiles
const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

//Schéma du modèle utilisateur
const userSchema = mongoose.Schema({
    pseudo: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

//Validation pour mail unique
userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
