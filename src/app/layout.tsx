import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adilson Dev",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
