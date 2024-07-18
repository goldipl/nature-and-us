import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature & Us - Home page",
  description:
    "Nature is beautiful. Discover how spending time in forests can boost your mental and physical well-being",
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
