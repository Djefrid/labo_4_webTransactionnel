'use server';

export async function sendPublication(formData) {

    const getFilePathImage = (file) => {
        if (file) {
            const fileName = file.name; 
            const filePath = `images/${fileName}`;
            return filePath;
        } else {
            return '';
        }
    };

    const titre = formData.get('titre');
    const auteur = formData.get('auteur');
    const imagePath = getFilePathImage(formData.get('imagePath'));
    const contenu = formData.get('contenu');

    const publicationData = {
        Image: imagePath,
        Titre: titre,
        Auteur: auteur,
        DateP: new Date().toISOString().slice(0, 10),
        Contenu: contenu
    };

    await fetch('http://localhost:3000/Publication', {
        method: 'POST',
        body: JSON.stringify(publicationData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    formData.set('imagePath', '');
    formData.set('titre', '');
    formData.set('auteur', '');
    formData.set('contenu', '');
}