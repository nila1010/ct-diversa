import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "700"], style: ["normal", "italic"] });

export const metadata = {
  title: "Diversa - Tilgængeligheds check",
  description: "Her kan du få analyseret dit site, og se om det overholder standarderne for tilgængelighed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <meta name="robots" content="noindex"></meta>
        <link rel="icon" href="/logo/favicon.ico" type="image/x-icon" sizes="32x32" />
      </head>
      <body className={`${poppins.className} bg-background-color-primary`}>
        <header className="relative z-10 bg-backgound-color-secondary">
          <Navigation />
        </header>
        <main className="grid max-w-[1500px] w-[100%] m-auto">{children}</main>
        <footer className="bg-primary-color">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
