import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Okręgowa Izba Pielęgniarek i Położnych w Łodzi",
  description:
    "Witamy na stronie Okręgowej Izby Pielęgniarek i Położnych w Łodzi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
