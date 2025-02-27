import type { Metadata } from "next";
//import "./globals.css";
import { Container } from "react-bootstrap";
import Header from "@/Component/header";

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
        <Header/>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
