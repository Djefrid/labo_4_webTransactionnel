export const dynamic = 'force-dynamic';

//Route GET accessible à l'adresse: http://{domaine}/handler
//Par défaut, domaine=localhost:3000
export async function GET(request){
    
    return new Response('Hello from route.js!', {
        status: 200
    });
}