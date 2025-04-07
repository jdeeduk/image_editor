import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Image Editor',
  description: 'Real-time image editor with text and filter capabilities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
