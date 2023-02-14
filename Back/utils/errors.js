//Contrôleur d'erreur d'upload d'image
exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: '' }

    if (err.message.includes('Invalid file type'))
        errors.format = 'Format incompatible'

    if (err.message.includes('Max size limit'))
        errors.maxSize = 'Le fichier dépasse 500ko'

    return errors
}
