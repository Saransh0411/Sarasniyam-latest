import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';

export const productSans = localFont({
  src: './fonts/ProductSans.woff',
  variable: '--font-product-sans',
});
const poppins = localFont({
  src: './fonts/Poppins.woff',
  variable: '--font-poppins',
});
const montserrat = localFont({
  src: './fonts/Montserrat.woff',
  variable: '--font-montserrat',
});

const metadata: Metadata = {
  title: 'SarasNiyam',
  description: 'Created @ KLIC',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${productSans.variable} ${poppins.variable} ${montserrat.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
