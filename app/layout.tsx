import "@/app/styles/globals.css";
import { title, description, favicon } from "@/ublog.config";
import Header from "@/app/components/Header/";
import Providers from "@/app/context/providers";
import Toast from "@/app/components/Header/Toast";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop";
import { Lato } from "next/font/google";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title,
  description,
  icons: [{ rel: "icon", url: favicon }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body className={`${lato.variable} font-sans`}>
        <Providers>
          <main className="container">
            <Header />
            {children}
            <Footer />
            <Toast />
            <ScrollToTop />
          </main>
        </Providers>
      </body>
    </html>
  );
}
