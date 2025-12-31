import { ReactNode } from "react";
import ClientSideLayout from "./ClientSideLayout";
import { Providers } from "./providers";
import "./globals.css";
import "animate.css";

export const metadata = {
  title: "Forum | ProGrowing",
  description:
    "Tech Forum with focus on technology, data-driven approaches, and collaboration.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientSideLayout>{children}</ClientSideLayout>
        </Providers>
      </body>
    </html>
  );
}
