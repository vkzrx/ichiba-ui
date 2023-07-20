import './globals.css';
import { TopBar } from '~/components/topbar';

export const metadata = {
  title: 'Ichiba | Online Store',
  description: 'Modern japanese streetwear where tradition graces fashion',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen px-8">
        <TopBar />
        {children}
      </body>
    </html>
  );
}
