import { Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/homepage/whatsappbutton";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Muscat Clean",
  description:
    "Sparkling Clean Spaces in Muscat, Oman - Your Trusted Cleaning Partner!",
  metadataBase: new URL("https://muscatclean.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
      "om-OM": "/om-OM",
    },
  },
  openGraph: {
    images: [
      "https://res.cloudinary.com/dkrobqcdn/image/upload/v1707082276/paedpfftmh6reygpz0zw.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className="fixed bottom-1 right-1 z-50">
          <WhatsAppButton />
        </div>
        <div className="mx-2 sm:mx-0 sm:container   m-auto py-3">
          <div className="mt-8">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
