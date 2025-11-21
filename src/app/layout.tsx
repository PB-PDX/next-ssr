// ensure that this does not impose any csr requirements
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
// import './globals.css';
import { TRPCProvider } from './providers';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spoken Clone',
  description: 'AI-powered audiobook creation platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TRPCProvider>
          {children}
        </TRPCProvider>
      </body>
    </html>
  );
}