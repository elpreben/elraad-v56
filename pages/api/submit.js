export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const response = await fetch('https://hooks.zapier.com/hooks/catch/23816799/uuwupe8/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    if (!response.ok) {
      throw new Error('Zapier responded with an error');
    }

    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Feil ved sending til Zapier (server):', error);
    return res.status(500).json({ message: 'Failed to send to Zapier' });
  }
}
