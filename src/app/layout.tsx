import '../assets/styles/main.scss';
import type {Metadata} from 'next';
import type {ReactNode} from 'react';
import localFont from 'next/font/local';
import information from 'config/information';

const vazirFont = localFont({
  variable: '--font-vazir',
  src: [
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Thin.woff2',
      weight: '100',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-ExtraLight.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Medium.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-SemiBold.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-ExtraBold.woff2',
      weight: '800',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Vazirmatn-UI-FD-Black.woff2',
      weight: '900',
      style: 'normal'
    }
  ]
});

export const metadata: Metadata = {
  // metadataBase: new URL('https://dmnu.vercel.app/'),
  // alternates: {
  //   canonical: '/',
  //   languages: {
  //     'fa-IR': '/'
  //   }
  // },
  title: information.name,
  description: information.description,
  applicationName: information.name,
  category: 'cafe',
  keywords: information.name.split(' '),
  openGraph: {
    type: 'website',
    title: information.name,
    siteName: information.name,
    images: '/images/logo.png',
    countryName: 'IR',
    description: information.description
  },
  twitter: {
    card: 'summary_large_image',
    title: information.name,
    images: ['/images/logo.png'],
    description: information.description
  },
  appleWebApp: {
    title: information.name
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/logo.png'
    }
  }
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="fa" dir="rtl" className={vazirFont.variable}>
      <body className="rtl pb-24">{children}</body>
    </html>
  );
}
