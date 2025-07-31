import { useState } from 'react';

export default function AiForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [caseNumber, setCaseNumber] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hent saksnummer
    const resCase = await fetch('/api/get-case-number', { method: 'POST' });
    const { caseNumber } = await resCase.json();
    setCaseNumber(caseNumber);

    // Send e-post med saksnummer
    await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, caseNumber }),
    });

    alert(`Din forespørsel er registrert! Saksnummer: ${caseNumber}`);
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input
        type="email"
        placeholder="Din e-post"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Beskriv problemet"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">Send</button>
      {caseNumber && <p>Saksnummer: {caseNumber}</p>}
    </form>
  );
}
