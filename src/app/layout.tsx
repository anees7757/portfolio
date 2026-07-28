import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Anees | Flutter Developer",
  description: "Portfolio of Muhammad Anees, a Flutter developer building mobile apps and AI-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-background`}>
        {/* Runs before first paint. The intro overlay is now server-rendered so
            it covers the initial paint, which means on a repeat visit within the
            session it would flash for one frame before React could drop it.
            Flagging the html element here lets CSS hide it up front instead. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(sessionStorage.getItem('intro-seen'))document.documentElement.classList.add('intro-seen')}catch(e){}",
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
