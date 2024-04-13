export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if(id == null)
    {
        //rettourner tout les publications
        try {
            const res = await fetch(`http://localhost:3000/Publication`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            
            if (!res.ok) {
                throw new Error('Échec de la récupération des données de publication');
            }
            
            const data = await res.json();
            
            return new Response(JSON.stringify(data), {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                status: 200,
                statusText: 'Publication récupérée avec succes'
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                status: 500,
                statusText: 'Erreur interne du serveur'
            });
        }
    }
    else
    {
        try {
            const res = await fetch(`http://localhost:3000/Publication/${id}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            
            if (!res.ok) {
                throw new Error('Échec de la récupération des données de publication');
            }
            
            const data = await res.json();
            
            return new Response(JSON.stringify(data), {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                status: 200,
                statusText: 'Publication récupérée'
            });
        } catch (error) {
            return new Response(JSON.stringify({ error: error.message }), {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                status: 500,
                statusText: 'Erreur interne du serveur'
            });
        }
    }


    
}
