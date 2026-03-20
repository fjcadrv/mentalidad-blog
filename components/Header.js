import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-16 pb-10 text-center">
      
      <div className="flex flex-col items-center mb-4">
        <img 
          src="/images/logo.png" 
          alt="Mentalidad & Mercado FX"
          className="w-45 h-45 object-contain mb-2"
        />
      </div>

      <h1 className="text-4xl font-semibold text-white">
        <Link href="/">{name}</Link>
      </h1>

    </header>
  );
}
