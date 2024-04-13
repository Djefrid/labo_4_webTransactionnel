export async function POST(request) {
    try {
        const { Image, Titre, Auteur, DateP, Contenu } = await request.json();

        const publicationData = {
            Image: Image,
            Titre: Titre,
            Auteur: Auteur,
            DateP: DateP,
            Contenu: Contenu
        };

        const res = await fetch('http://localhost:3000/Publication', {
            method: 'POST',
            body: JSON.stringify(publicationData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        if (!res.ok) {
            throw new Error('Échec de la publication des données de publication');
        }

        const data = await res.json();

        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
            status: 200,
            statusText: 'Publication ajoutée avec succès',
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
