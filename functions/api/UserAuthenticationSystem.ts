export async function UserAuthenticationSystemHandler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return new Response(JSON.stringify({ error: 'Missing username or password' }), { status: 400 });
    }

    // Mock authentication logic
    const isAuthenticated = username === 'testUser' && password === 'securePassword';

    if (isAuthenticated) {
      return new Response(JSON.stringify({ success: true, message: 'Authentication successful' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
}
