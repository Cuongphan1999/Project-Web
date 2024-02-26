import { Inter } from "next/font/google";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Infor from "@/components/infor/infor";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web App",
  description: "build web app using NextJS 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/> 
      <Infor/>
      <main className="container">
      
        {children}
      </main>
      <Footer/>
      </body>
    </html>
  );
}
