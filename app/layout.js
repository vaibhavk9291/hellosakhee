import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Hello Sakhee — Your Daily Companion",
  description: "A little space in every day to pause, reflect, grow, and come back to yourself.",
  icons: {
    icon: [
      { url: "/sakhee-logo-icon.png", type: "image/png" },
      { url: "/favicon.ico" }
    ],
    shortcut: ["/sakhee-logo-icon.png"],
    apple: [
      { url: "/sakhee-logo-icon.png" }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${nunito.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
