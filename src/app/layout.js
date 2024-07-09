import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/navbar';
import Servicos from '../components/servicos';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Decole",
  description: "Decole acessoria contabil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}