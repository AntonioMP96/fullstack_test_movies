import { Poppins } from "next/font/google";
import "./globals.css";
import Header from '@/app/ui/Header'
import Footer from '@/app/ui/Footer'


const poppins = Poppins({ weight: '300', subsets: ["latin"] });

export const metadata = {
  title: "Sweet Movies MX",
  description: "Read info about the latest and greatest movies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
