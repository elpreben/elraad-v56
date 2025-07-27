
import Layout from '../components/Layout';

export default function Priser() {
  return (
    <Layout>
      <div className="bg-white p-6 rounded-xl shadow max-w-xl w-full text-center">
        <h1 className="text-2xl font-bold mb-4">Priser</h1>
        <p>Råd og veiledningsamtale for kun <strong>kr 50,- inkl. MVA</strong>.</p>
        <p className="text-sm text-gray-600">(Estimert avsatt tid: 10–15 minutter per samtale)</p>
      </div>
    </Layout>
  );
}
