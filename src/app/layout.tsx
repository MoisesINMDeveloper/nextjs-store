import { Footer } from "app/components/shared/Footer";
import { Header } from "app/components/shared/Header";
import { PoppinsFamily } from "app/fontsFamily/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={PoppinsFamily.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
