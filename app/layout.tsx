import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";
import "@fortawesome/fontawesome-free/css/all.min.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
title: "Best SEO Company in India | A.S Web Matrix | Website Development & Digital Marketing",
  description: "A.S Web Matrix is the best SEO Company in India providing SEO services, website development, WordPress, MERN stack, and digital marketing across Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Noida, Gurugram & Faridabad. Rank your business on Google first page with expert SEO strategies.",
  keywords: "Best SEO Company in India, SEO Company in Delhi, SEO Company in Mumbai, SEO Company in Bangalore, SEO Company in Hyderabad, SEO Company in Chennai, SEO Company in Kolkata, SEO Company in Pune, SEO Company in Ahmedabad, SEO Company in Jaipur, SEO Company in Noida, SEO Company in Gurugram, SEO Company in Faridabad, Digital Marketing Company India, Website Development Company India, WordPress Developer India, MERN Stack Developer India, Top SEO Expert India, Affordable SEO Services India",
  openGraph: {
    title: "A.S Web Matrix - Best SEO & Website Development Company in India",
    description: "Leading SEO & Digital Marketing Agency serving Delhi, Mumbai, Bangalore, Hyderabad, Chennai & all major Indian cities.",
    type: "website",
    url: "https://www.aswebmatrix.com/services",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in India - A.S Web Matrix",
    description: "Professional SEO, Website Development & Digital Marketing services across India.",
  },

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
      <Header />
        {children}
      <Footer />
      </body>
    </html>
  );
}
