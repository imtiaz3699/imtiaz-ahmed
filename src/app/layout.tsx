import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Wrapper from "./Components/Wrapper/Wrapper";
import { StyleContextProvider } from "../../Contexts/StyleContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export const metadata: Metadata = {
  title: "Imtiaz Ahmed",
  description: "Front-End Developer",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased  w-full `}
      >
        <StyleContextProvider>
          <Wrapper>{children}</Wrapper>
        </StyleContextProvider>
      </body>
    </html>
  );
}
