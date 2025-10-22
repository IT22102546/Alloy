import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aloy Restaurant - Fine Dining in Kandy',
  description: 'Experience the finest Sri Lankan cuisine in an elegant setting with breathtaking views of Kandy\'s natural beauty.',
  icons: {
    icon: '/assets/Logo.png',
    // You can also add other icon sizes if needed
    // icon: [
    //   { url: '/asset/Logo.png', sizes: '32x32' },
    //   { url: '/asset/Logo.png', sizes: '16x16' },
    // ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} ${playfair.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}