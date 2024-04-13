export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    try {
        // Récupérer les commentaires associés à la publication
        const commentairesResponse = await fetch(`http://localhost:3000/Commentaire?Publicationid=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!commentairesResponse.ok) {
            throw new Error('Erreur lors de la récupération des commentaires');
        }

        const commentaires = await commentairesResponse.json();

        // Vérifier s'il y a au moins un commentaire associé à la publication
        if (commentaires.length === 0) {
            throw new Error('La publication ne contient aucun commentaire');
        }

        // Supprimer tous les commentaires associés à la publication
        for (const commentaire of commentaires) {
            const deleteResponse = await fetch(`http://localhost:3000/Commentaire/${commentaire.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!deleteResponse.ok) {
                throw new Error('Échec de la suppression d\'un commentaire associé à la publication');
            }
        }

        // Supprimer la publication après la suppression des commentaires
        const publicationResponse = await fetch(`http://localhost:3000/Publication/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!publicationResponse.ok) {
            throw new Error('Échec de la suppression de la publication');
        }

        return new Response(JSON.stringify({ success: true }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
            statusText: 'Publication et commentaires associés supprimés avec succès',
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
            statusText: 'Erreur interne du serveur',
        });
    }
}
