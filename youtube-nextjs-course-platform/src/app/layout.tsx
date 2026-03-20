import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Codarse - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programação gratuitos e com a melhor experiência de aprendizado e foco",
};


type TRootLayout = Readonly<{children: React.ReactNode}>;


export default function RootLayout({ children }: TRootLayout) {
  return (
    <html lang="pt-Br">
      <body
        className={nunito.className}
      >
        {/* <Header/> */}
        {children}
      </body>
    </html>
  );
}
