import "./styles/globals.css";
import { ReactNode } from "react";
import ClientLayout from "../components/Clientlayout";

export const metadata = {
  title: "Spotify | Stats",
  description: "Veja suas estatísticas do Spotify",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
