import { Geist, Geist_Mono } from "next/font/google";
import '../../styles/globals.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextGen Construction Solutions",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`} 
      style={{ margin: 0, padding: 0}}
>
        {children}
      </body>
    </html>
  );
}
