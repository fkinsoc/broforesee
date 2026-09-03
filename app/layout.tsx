import type {Metadata} from 'next';
import './globals.css'; // Global styles
import 'leaflet/dist/leaflet.css'; // Leaflet styles

export const metadata: Metadata = {
  title: 'Bro Foresee - Land Acquisition Analytics',
  description: 'AI-Powered Land Acquisition Delay Prediction & Early Warning System',
  openGraph: {
    title: 'Bro Foresee',
    description: 'AI-Powered Land Acquisition Delay Prediction & Early Warning System',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bro Foresee',
    description: 'AI-Powered Land Acquisition Delay Prediction & Early Warning System',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-gray-100 antialiased min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
