import Navbar from "@/components/Navbar";
import "./globals.css";

import Footer from "@/components/Footer";

export const metadata = {
  title: "BhromonKori",
  description: "An app for people enthusiastic for travelling",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
