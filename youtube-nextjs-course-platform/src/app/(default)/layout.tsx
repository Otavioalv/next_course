

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

import { Header } from "@/src/components/header/Header";

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


type TLayout = Readonly<{children: React.ReactNode}>;


export default function Layout({ children }: TLayout) {
  return (
    <>
        <Header/>
        {children}
    </>
  );
}
