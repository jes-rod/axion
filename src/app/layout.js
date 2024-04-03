import { Inter } from "next/font/google";
import { CookiesProvider } from 'next-client-cookies/server';
import "../../public/css/bootstrap/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "AXION",
  description: "A new meaning for Smartphone",
};

export const viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <CookiesProvider>
      <html lang="en">
            <Head>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
        <body>
          <Navbar />  
          {children}
        </body>
      </html>

    </CookiesProvider>
 


  );
}
