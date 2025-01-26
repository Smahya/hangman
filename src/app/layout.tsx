import type { Metadata } from "next";
import { Mouse_Memoirs } from "next/font/google";
import "./globals.css";
import cx from "classnames";

const mouse = Mouse_Memoirs({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Hangman",
  description: "Guess corrrect or get hanged",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cx(
          mouse.className,
          "bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat min-h-screen"
        )}
      >
        <div className="min-h-screen bg-gradient-to-b from-[#1A043ABF] via-[#151278BF] to-[#2B1677BF]">
          <div className="max-w-[1440px] mx-auto min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
