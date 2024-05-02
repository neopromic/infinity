import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infinity App",
  description:
    "Infinity é um projeto desenvolvido para aqueles quais gostam do esporte calistenia.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="dark"
        disableTransitionOnChange
        storageKey="infinity-theme"
      >
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
