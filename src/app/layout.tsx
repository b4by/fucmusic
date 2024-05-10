import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { cn } from "@/utils/utils";
import { MusicPlayerProvider } from "@/providers/MusicPlayerContext";
import { Footer } from "@/components/footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";
import { YclientScript } from "@/components/yclient-script";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fucmusic.ru"),
  title: "Fuc Music - студия звукозаписи, Москва, Таганская",
  description:
    "Аренда студии звукозаписи. Высококласснное оборудование. Качественная запись вокала и инструментов. Сведение и мастеринг. Песня под ключ. Забронировать онлайн.",
  keywords: [
    "звукозаписывающая",
    "студия",
    "звукозапись",
    "продакшн",
    "песня под ключ",
    "песня в подарок",
    "корпоративный гимн",
    "аранжировка",
    "написание текста",
  ],

  openGraph: {
    title: "Fuc Music - студия звукозаписи, Москва, Таганская",
    description:
      "Аренда студии звукозаписи. Высококлассное оборудование. Качественная запись вокала и инструментов. Сведение и мастеринг. Песня под ключ. Забронировать онлайн.",
    url: "https://fucmusic.ru",
    siteName: "Fuc Music",
    images: [
      {
        url: "/fuc_music_music_studio_logo.jpg",
        width: "800",
        height: "600",
        type: "image/jpg",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <ReactQueryClientProvider>
        <body className={cn(montserrat.className, "flex h-lvh flex-col")}>
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <YclientScript />
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
