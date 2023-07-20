import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <main className="h-[92%] flex">
      <div className="w-3/5 flex flex-col justify-between pb-8 pr-8 mb-10 border-r border-r-black border-b border-b-black">
        <h1 className="text-9xl font-bold uppercase">
          Ichiba
          <span className="block text-right">Market</span>
        </h1>
        <div className="flex items-center justify-between">
          <div className="w-1/3 uppercase">
            The perfect fusion of traditional japanese and contemporary fashion of japanese
            streetwear heroes
          </div>
          <Link
            href="/shop"
            className="h-28 w-28 flex items-center justify-center border border-black rounded-full uppercase"
          >
            Shop now
          </Link>
        </div>
      </div>
      <div className="grow flex border-b border-b-black mb-10">
        <Image priority src="/assets/hero.png" alt="Hero" width="620" height="800" />
      </div>
    </main>
  );
}
