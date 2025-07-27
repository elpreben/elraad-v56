
import Layout from '../components/Layout';

export default function Om() {
  return (
    <Layout>
      <div className="bg-white p-6 rounded-xl shadow max-w-xl w-full text-left">
        <h1 className="text-2xl font-bold mb-4">Om Elråd</h1>
        <p className="mb-2">Vi tilbyr råd og veiledning angående ditt elektriske anlegg.</p>
        <p className="font-semibold">Vår kompetanse består av:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Elektroinstallatør</li>
          <li>Gruppe L fagbrev (elektrikerfagbrevet)</li>
          <li>NEK 405-2-3 avhendig bolig sertifisering</li>
        </ul>
      </div>
    </Layout>
  );
}
