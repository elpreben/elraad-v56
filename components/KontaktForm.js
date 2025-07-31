import { useRouter } from 'next/router';
import { useState } from 'react';

export default function KontaktForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [caseNumber] = useState(router.query.case || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Takk! Saksnummer: ${caseNumber} og Navn: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <input type="text" placeholder="Navn" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" value={caseNumber} readOnly />
      <button type="submit">Send</button>
    </form>
  );
}
