import type { Metadata } from "next";
//import "./globals.css";
import { Container } from "react-bootstrap";
import Header from "@/Component/header";
import Info from "@/Component/info";
import Footer from "@/Component/footer";
export const metadata: Metadata = {
  title: "Đỗ Minh Tây",
  description: "Đỗ Minh Tây",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        
        <Container>
          <Header/>
          {children}
          <Info/>
          <Footer/>
        </Container>
        
      </body>
    </html>
  );
}
