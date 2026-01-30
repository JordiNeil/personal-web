import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jordi Neil Sánchez | AI Engineer & Tech Lead",
  description: "Tech Lead, M.Sc in AI, Mechatronics Engineer. Building the future with AI, Data Engineering, and innovative software solutions.",
  keywords: ["AI Engineer", "Data Engineer", "Tech Lead", "Python", "Machine Learning", "Databricks"],
  authors: [{ name: "Jordi Neil Sánchez" }],
  openGraph: {
    title: "Jordi Neil Sánchez | AI Engineer & Tech Lead",
    description: "Tech Lead, M.Sc in AI, Mechatronics Engineer",
    url: "https://jordineil.com",
    siteName: "Jordi Neil Sánchez",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
