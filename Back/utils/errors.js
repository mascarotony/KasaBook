//Contrôleur d'erreur d'upload d'image
exports.uploadErrors = (err) => {
    let errors = { maxSize: '' }

    if (err.message.includes('Max size limit'))
        errors.maxSize = 'Le fichier dépasse 500ko'

    return errors
}
