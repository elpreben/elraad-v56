import { useState } from 'react';
import Layout from '../components/Layout';

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const plainFormData = Object.fromEntries(formData.entries());

    try {
      await fetch('/api/kontakt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plainFormData)
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Feil ved innsending:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="bg-white shadow p-4 rounded-xl max-w-md w-full mt-4">
        {!submitted ? (
          <>
            <h1 className="text-lg font-bold mb-2 text-center">Kontakt oss</h1>
            <p className="mb-3 text-center text-gray-700 text-xs">
              Fyll ut skjema, og vi vil kontakte deg innen 48 timer på telefon.
              <br />
              <span className="font-semibold">
                (Estimert avsatt tid: 10–15 minutter per samtale, Kr 50,- inkl. MVA)
              </span>
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                name="navn"
                type="text"
                className="w-full border p-2 rounded text-sm"
                placeholder="Fullt navn"
                required
              />
              <input
                name="telefon"
                type="text"
                className="w-full border p-2 rounded text-sm"
                placeholder="Telefonnummer"
                required
              />
              <input
                name="adresse"
                type="text"
                className="w-full border p-2 rounded text-sm"
                placeholder="Adresse"
                required
              />
              <input
                name="postnummer"
                type="text"
                className="w-full border p-2 rounded text-sm"
                placeholder="Postnummer"
                required
              />
              <input
                name="email"
                type="email"
                className="w-full border p-2 rounded text-sm"
                placeholder="E-postadresse"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-2 rounded-lg text-sm"
              >
                {loading ? 'Sender...' : 'SEND MELDING'}
              </button>
            </form>
          </>
        ) : (
          <p className="text-center font-semibold text-md">
            Takk! Vi har mottatt din forespørsel. Vi tar kontakt innen 48 timer.
          </p>
        )}
      </div>
    </Layout>
  );
}
