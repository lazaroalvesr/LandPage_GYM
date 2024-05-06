import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

export const metadata: Metadata = {
  title: "Best GYM",
  description: "GYM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/img/Icons/Icon_Gym.png" type="image/png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
