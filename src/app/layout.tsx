import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Chinonso — Backend Engineer",
  description:
    "Backend-focused Fullstack Engineer with 4 years of experience building scalable APIs and web applications. Strong in Python, Django, FastAPI, and Node.js.",
  keywords: [
    "Backend Engineer",
    "Fullstack Developer",
    "Python",
    "Django",
    "FastAPI",
    "Node.js",
    "Nigeria",
    "Software Engineer",
  ],
  authors: [{ name: "Justin Chinonso", url: "https://github.com/justinnonso05/" }],
  openGraph: {
    title: "Justin Chinonso — Backend Engineer",
    description: "Backend-focused Fullstack Engineer with 4 years of experience building scalable APIs and web applications.",
    url: "https://github.com/justinnonso05/",
    siteName: "Justin Chinonso Portfolio",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 600,
        alt: "Justin Chinonso Avatar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Chinonso — Backend Engineer",
    description: "Backend-focused Fullstack Engineer with 4 years of experience.",
    images: ["/avatar.png"],
  },
  icons: {
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
