import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// In your Next.js configuration or component file

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  title: 'Quota Shahid 2024',
  description:
    'A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement.',
  keywords: 'Bangladesh, quota reform, 2024, quota movement, equality, justice',
  authors: [{ name: 'Hamidul-Islam' }], // Optional: add your name or organization
  viewport: 'width=device-width, initial-scale=1.0', // For responsive design

  // Open Graph / Facebook
  openGraph: {
    title: 'Quota Shahid 2024',
    description:
      'A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement.',
    url: 'http://quotashahid2024.com',
    siteName: 'Quota Shahid 2024',
    images: [
      {
        url: 'http://quotashahid2024.com/og-image.png', // Replace with the URL of your Open Graph image
        width: 1200,
        height: 630,
        alt: 'Quota Shahid 2024 - A website dedicated to the 2024 Bangladesh quota reform movement',
      },
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Quota Shahid 2024',
    description:
      'A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement.',
    images: ['http://quotashahid2024.com/og-image.png'], // Replace with the URL of your Twitter card image
    site: '@hamidulislam', // Optional: Your Twitter handle
  },

  // Additional metadata
  robots: 'index, follow', // or 'noindex, nofollow' for pages you don't want indexed // Optional: For Google Search Console verification
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement."
        ></meta>
        <meta
          property="og:url"
          content="https://www.quotashahid2024.com/"
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="Quota Shahid 2024" />
        <meta
          property="og:description"
          content="A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/images/82c74f91-c68a-491c-80cc-1274adc54f7e.png?token=TlQgbD2-tcqeQcU7YVNC-Qi9JsGjdeoVtoiwZe_VFfY&height=621&width=1200&expires=33258966875"
        ></meta>

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="quotashahid2024.com" />
        <meta
          property="twitter:url"
          content="https://www.quotashahid2024.com/"
        />
        <meta name="twitter:title" content="Quota Shahid 2024" />
        <meta
          name="twitter:description"
          content="A website dedicated to documenting and educating future generations about the 2024 Bangladesh quota reform movement."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/images/82c74f91-c68a-491c-80cc-1274adc54f7e.png?token=TlQgbD2-tcqeQcU7YVNC-Qi9JsGjdeoVtoiwZe_VFfY&height=621&width=1200&expires=33258966875"
        />
      </Head>
      <body className={`${inter.className} max-w-screen-2xl mx-auto px-4`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
