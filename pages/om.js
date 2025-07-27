import Link from 'next/link';
import Layout from '../components/Layout';

export default function Om() {
  return (
    <Layout>
      <div className="bg-white shadow p-6 rounded-xl max-w-3xl w-full mt-4 text-gray-800">
        
        {/* Overskrift */}
        <h1 className="text-2xl font-bold mb-4 text-center">Om Elråd</h1>

        {/* Beskrivelse */}
        <p className="mb-4 text-base leading-relaxed text-center">
          Elråd er din digitale elektroassistent. Vi tilbyr trygg og pålitelig rådgivning knyttet til ditt elektriske anlegg.
          Vårt mål er å kombinere kunstig intelligens med solid fagkompetanse, slik at du får raske, presise og kostnadseffektive løsninger.
        </p>

        {/* Kompetanse */}
        <h2 className="text-lg font-semibold mb-2">Vår kompetanse</h2>
        <ul className="list-disc list-inside mb-6 text-sm">
          <li>Autorisert elektroinstallatør</li>
          <li>Gruppe L fagbrev (elektrikerfagbrevet)</li>
          <li>NEK 405-2-3 sertifisering for avhendingskontroll av bolig</li>
        </ul>

        {/* Ny seksjon: Hvordan fungerer Elråd.no */}
        <h2 className="text-xl font-bold mb-3">Hvordan fungerer Elråd.no?</h2>
        <div className="bg-gray-100 p-4 rounded-lg text-sm leading-relaxed">
          <p className="mb-2">
            <strong>Steg 1:</strong> Fyll ut skjemaet på forsiden og beskriv problemet ditt. 
            Vår elektro-AI analyserer informasjonen og gir deg råd og veiledning med en gang.
          </p>
          <p className="mb-2">
            <strong>Steg 2:</strong> Hvis problemet ikke blir løst, kan en av våre kvalifiserte fagpersoner – autorisert installatør og elektriker – ta kontakt. 
            Du får da en profesjonell vurdering om problemet kan løses av deg selv, eller om en autorisert elektriker må utføre arbeidet. 
            Ved behov kan vi også gi deg et prisestimat fra Elråd.no for jobben.
          </p>
          <p className="mb-2">
            <strong>Steg 3:</strong> Elråd.no kontakter en lokal elektrikerbedrift og videreformidler all relevant informasjon, inkludert prisestimat. 
            Din lokale elektriker tar deretter kontakt for å gi et konkret tilbud og avtale utførelsen.
          </p>
        </div>

        {/* Call-to-Action-knapp */}
        <div className="text-center mt-6">
          <Link href="/">
            <a className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:opacity-90 transition">
              Fyll ut skjemaet nå
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
