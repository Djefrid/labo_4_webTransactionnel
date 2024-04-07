export const dynamic = "force-dynamic";

export async function GET(request) {
    return new Response("Hello, Next.js!", {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    });
}



export async function POST(request) {
    const body = await request.text();
    return new Response(body);
}
