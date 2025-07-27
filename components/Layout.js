import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const hideOnContactPage = router.pathname === '/kontakt';

  return (
    <div className="flex flex-col min-h-screen">
      {/* SLANK HEADER */}
      <header className="bg-white shadow flex items-center justify-between px-4 h-[50px]">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Elråd logo" width={90} height={30} />
        </div>
        <nav className="flex gap-3 text-black text-sm font-medium">
          <Link href="/">Hjem</Link>
          <Link href="/om">Om Elråd</Link>
          <Link href="/priser">Priser</Link>
          <Link href="/kontakt">Kontakt oss</Link>
        </nav>
      </header>

      {/* MAIN */}
      <main className="flex flex-col items-center justify-start flex-grow bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 py-4">
        {children}
      </main>

      {/* FOOTER BUTTON */}
      {!hideOnContactPage && (
        <div className="w-full flex justify-center p-4 bg-white">
          <Link href="/kontakt">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-3 rounded-lg shadow-md text-center max-w-xl w-full">
              Trenger du fortsatt hjelp? Få personlig veiledning fra en autorisert elektroinstallatør.
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
