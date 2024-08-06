import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
      <body className={`${inter.className} max-w-screen-2xl mx-auto px-4`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
