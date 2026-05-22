import "./globals.css";

import { ReactNode } from "react";

export const metadata = {
  title: "Wexa Analytics",
  description:
    "Realtime Analytics Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-slate-100">

        {children}

      </body>

    </html>
  );
}