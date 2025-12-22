import { Open_Sans, Poppins } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";

const fontHeading = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-heading",
});

const fontBody = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} font-body antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
