import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type {} from "ldrs";
import NavBar from "@/components/navigation";
import Container from "@/components/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Story Ai App",
  description: "Bring best AI generated stories for children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-sm bg-gradient-to-br from-purple-400/50 via-blue-200 to-red-400/50`}
      >
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/grid.js"
        ></script>
        <Container>
          <NavBar />
          {children}
        </Container>
      </body>
    </html>
  );
}
