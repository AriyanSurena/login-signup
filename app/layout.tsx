"use client";
import { vazir } from "./fonts";
import "./reset.css"
import "./globals.css";
import Container from "./_components/Container";
import { ThemeProvider } from "./_components/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazir.className} antialiased contents`}>
        <ThemeProvider>
          <Container>{children}</Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
