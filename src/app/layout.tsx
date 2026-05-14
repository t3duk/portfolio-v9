import { Geist, Geist_Mono } from "next/font/google";
import { SensoryUIProvider } from "@/components/ui/sensory-ui/config/provider";
import "./globals.css";
import { GTProvider } from "gt-next";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "dark",
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <GTProvider>
          <SensoryUIProvider>
            <ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
          </SensoryUIProvider>
        </GTProvider>
      </body>
    </html>
  );
}
