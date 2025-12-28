import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./context/LanguageContext";
import { CursorTrail } from './components/CursorTrail';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Justin Francis | Software Engineer | Cloud & DevOps Engineer | Cybersecurity | Systems & Network Administrator",
  description: "Portfolio of Justin Francis, specialized in Cloud, DevOps/Cloud, Cybersecurity and Software Development, based on his CV.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className} suppressHydrationWarning>
        <CursorTrail />
        <div className="aurora-background"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* The LanguageProvider must wrap EVERYTHING that will use the translation. */}
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}