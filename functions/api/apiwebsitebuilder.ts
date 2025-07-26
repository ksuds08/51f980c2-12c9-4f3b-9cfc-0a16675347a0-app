export async function apiwebsitebuilderHandler(req: Request): Promise<Response> {
  return new Response(JSON.stringify({ message: "Endpoint for submitting website design and deployment requests." }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}