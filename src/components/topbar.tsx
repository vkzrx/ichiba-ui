import Link from 'next/link';

export function TopBar(): JSX.Element {
  return (
    <nav className="h-[8%] flex items-center justify-between border-b border-b-black">
      <Link href="/" className="flex items-center space-x-4">
        <div className="h-5 w-5 bg-red-600 rounded-full" />
        <div>SHOP</div>
      </Link>
      <div className="space-x-2">
        <Link href="/account">ACCOUNT</Link>
        <button type="button">CART 0</button>
      </div>
    </nav>
  );
}
