import Footer from "@/components/common/footer";
import Gtag from "@/components/common/gtag";
import AppHeader from "@/components/common/app-header";
import { ThemeWrapper } from "@/context/theme.context";
import "@/styles/globals.scss";

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
    <html lang="en" dir="ltr">
      <body>
        <ThemeWrapper>
          <AppHeader />
          {children}
          <Footer />
          <Gtag />
        </ThemeWrapper>
      </body>
    </html>
  );
}
