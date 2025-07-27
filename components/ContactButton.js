import Link from 'next/link';

export default function ContactButton() {
  return (
    <div className="w-full flex justify-center mt-10 mb-6">
      <Link href="/kontakt-oss">
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-4 rounded-lg shadow-md">
          Trenger du fortsatt hjelp? Få personlig veiledning fra en autorisert elektroinstallatør.
        </button>
      </Link>
    </div>
  );
}
