import Link from 'next/link';

export function TopBar(): JSX.Element {
  return (
    <nav className="h-[8%] flex items-center justify-between border-b border-b-black">
      <Link href="/" className="flex items-center space-x-4">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="6.65" y1="6.50586" x2="6.65" y2="21.5059" stroke="black" strokeWidth="1.3" />
          <line x1="18.65" y1="6.50586" x2="18.65" y2="21.5059" stroke="black" strokeWidth="1.3" />
          <line
            x1="2.8999"
            y1="6.35586"
            x2="22.8999"
            y2="6.35586"
            stroke="black"
            strokeWidth="1.3"
          />
          <line
            x1="0.399902"
            y1="11.3559"
            x2="25.3999"
            y2="11.3559"
            stroke="black"
            strokeWidth="1.3"
          />
        </svg>
        <div>SHOP</div>
      </Link>
      <div className="space-x-2">
        <Link href="/account">ACCOUNT</Link>
        <button type="button">CART 0</button>
      </div>
    </nav>
  );
}
