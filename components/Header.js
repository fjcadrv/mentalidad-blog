import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
     <img 
  src="/images/logo.png" 
  alt="Mentalidad & Mercado FX"
  className="w-32 h-32 mx-auto mb-2 object-contain"
/>
      <p className="text-4xl font-semibold text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}
