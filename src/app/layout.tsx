import Footer from "@/components/common/footer";
import Gtag from "@/components/common/gtag";
import Header from "@/components/common/header";
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
    <html lang="en">
      <ThemeWrapper>
        <body>
          <Header />
          {children}
          <Footer />  
        </body>
        <Gtag />
      </ThemeWrapper>
    </html>
  );
}
