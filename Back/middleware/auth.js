//Constantes utiles
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//Constante pour le .env
dotenv.config();

module.exports = (req, res, next) => {
    try {
        //Récupération de la chaîne de jeton unique
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWTPRIVATEKEY);
        //Récupération de l'ID utilisateur liée au jeton
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(403).json({
            error: new Error(': unauthorized request!')
        });
    }
};