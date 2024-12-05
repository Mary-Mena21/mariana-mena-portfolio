import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
// import { ModeToggle } from '@/components/Toggle';
const inter = Inter({ subsets: ['latin'] });
// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  title: "Mariana's Portfolio",
  description: 'Software Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="absolute bottom-5 right-0 text-white"></div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
