import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AppNavbar from "./_components/navbar";
import AppFooter from "./_components/footer";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "This is code with danu official personal portfolio",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppNavbar/>
          <main className="container mx-auto px-5">
            {children}
          </main>
        <AppFooter />
      </body>
    </html>
  );
}
