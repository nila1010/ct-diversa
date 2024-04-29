import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Diversa - Tilgængeligheds check",
  description: "Her kan du få analyseret dit site, og se om det overholder standarderne for tilgængelighed.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <head>
        <meta name="robots" content="noindex"></meta>
      </head>
      <body className={`${poppins.className} bg-background-color-primary`}>
        <header className="relative z-10">
          <Navigation />
        </header>
        <main className="grid">{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
