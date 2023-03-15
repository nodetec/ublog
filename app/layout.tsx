import "@/app/styles/globals.css";
import { title, description, favicon } from "@/ublog.config";
import Header from "@/app/components/Header/";
import Providers from "@/app/context/providers";
import Toast from "./components/Header/Toast";

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
      <body>
        <Providers>
          <main className="container">
            <Header />
            {children}
            <Toast />
          </main>
        </Providers>
      </body>
    </html>
  );
}
