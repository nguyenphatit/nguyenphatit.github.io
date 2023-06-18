import { Providers } from './providers'
import "@/styles/globals.scss";
import AppHeader from "@/components/common/app-header";
import Footer from "@/components/common/footer";
import Gtag from "@/components/common/gtag";

export const metadata = {
  title: "nguyenphatit",
  description: "nguyenphatit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head />
      <body>
        <Providers>
          <AppHeader />
          {children}
          <Footer />
        </Providers>
        <Gtag />
      </body>
    </html>
  );
}
