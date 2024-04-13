'use server';

export async function sendComment(formData, articleId) {
    const comment = formData.get('commentairSaisie');

    const commentData = {
        Publicationid: articleId,
        DateC: new Date().toISOString().slice(0, 10),
        Contenu: comment
    };

    await fetch('http://localhost:3000/Commentaire', {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    });

    // Reset the form
    formData.set('commentairSaisie', '');
}
