import Test from "@/components/Test";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteMetadata from "@/utils/siteMetaData";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   metadatabase: new URL(siteMetadata.siteUrl),
//   title: {
//     template: `%s | ${siteMetadata.title}`,
//     default: siteMetadata.title, // a default is required when creating a template
//   },
//   description: siteMetadata.description,
//   openGraph: {
//     title: siteMetadata.title,
//     description: siteMetadata.description,
//     url: siteMetadata.url,
//     siteName: siteMetadata.title,
//     images: [siteMetadata.socialBanner],
//     locale: "en_US",
//     type: "website",
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: false,
//       noimageindex: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: siteMetadata.title,

//     images: [siteMetadata.socialBanner],
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
