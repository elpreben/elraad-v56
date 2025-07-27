
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const zapierWebhook = "https://hooks.zapier.com/hooks/catch/XXXXXX/XXXXXX/";
    await fetch(zapierWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    res.status(200).json({ message: 'Data sendt' });
  } else {
    res.status(405).json({ message: 'Kun POST støttes' });
  }
}
