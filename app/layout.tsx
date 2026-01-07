import type { Metadata } from "next";
import "./globals.css";
// @ts-ignore – CSS import treated as side-effect; no type declarations required
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Meteors } from "@/components/ui/meteors";

export const metadata: Metadata = {
  title: "MatÖzel - LGS, TYT, AYT Hazırlık ve Özel Ders",
  description: "MatÖzel ile LGS, TYT ve AYT sınavlarına uzman öğretmenlerle hazırlanın. Matematik, Fizik, Kimya, Biyoloji ve diğer derslerde birebir özel ders imkanı.",
  keywords: ["matematik özel ders", "lgs hazırlık", "tyt hazırlık", "ayt hazırlık", "online özel ders", "matözel"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
        <div className="fixed inset-0 pointer-events-none z-0">
          <Meteors number={30} />
        </div>
        <Header />
        <main className="min-h-screen pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
