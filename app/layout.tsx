import "@/app/styles/globals.css";
import { title, description, favicon } from "@/ublog.config";
import Header from "@/app/components/Header/";
import Providers from "@/app/context/providers";
import Toast from "./components/Header/Toast";
import UserBox from "./components/UserBox";

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
            <UserBox />
            {children}
            <Toast />
          </main>
        </Providers>
      </body>
    </html>
  );
}
