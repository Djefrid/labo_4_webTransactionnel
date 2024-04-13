export async function PUT(request) {
    try {
        // Extraire les données de la requête JSON
        const { id, Image, Titre, Auteur, DateP, Contenu } = await request.json();

        // Construire l'objet de données de la publication
        const publicationData = {
            Image,
            Titre,
            Auteur,
            DateP,
            Contenu
        };

        // Effectuer la requête PUT à l'URL de l'API avec les données mises à jour
        const response = await fetch(`http://localhost:3000/Publication/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(publicationData),
        });

        // Vérifier si la requête a réussi
        if (!response.ok) {
            throw new Error('Échec de la mise à jour des données de publication');
        }

        // Récupérer les données de la réponse
        const data = await response.json();

        // Retourner une réponse avec les données de la publication mises à jour
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
            statusText: 'Mise à jour reussie',
        });
    } catch (error) {
        // En cas d'erreur, retourner une réponse d'erreur avec un code 500
        return new Response(JSON.stringify({ error: error.message }), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 500,
            statusText: 'Erreur interne du serveur',
        });
    }
}
