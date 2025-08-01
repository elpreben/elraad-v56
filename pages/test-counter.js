import { useState } from 'react';

export default function TestCounter() {
  const [caseNumber, setCaseNumber] = useState('');

  const getCaseNumber = async () => {
    const res = await fetch('/api/get-case-number', { method: 'POST' });
    const data = await res.json();
    setCaseNumber(data.caseNumber);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Saksnummer</h1>
      <button onClick={getCaseNumber}>Hent Saksnummer</button>
      {caseNumber && <p>Saksnummer: {caseNumber}</p>}
    </div>
  );
}
