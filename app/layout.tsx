import "./globals.css";
import { title, description } from "@/ublog.config";
import Header from "@/app/components/Header/";
import Providers from "@/app/context/providers";
import Toast from "./components/Header/Toast";

export const metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html data-theme="light" lang="en">
      <body>
        <Providers>
          <main>
            <Header />
            {children}
            <Toast />
          </main>
        </Providers>
      </body>
    </html>
  );
}
