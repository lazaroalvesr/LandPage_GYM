import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";
import { Header } from "./_components/Header";

export const metadata: Metadata = {
  title: "GYM",
  description: "GYM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />  
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
