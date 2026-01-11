import { ReactNode } from "react";
import ClientSideLayout from "./ClientSideLayout";
import { Providers } from "./providers";
import "./globals.css";
import "animate.css";
import { UserProvider } from "@/context/Usercontext";

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
          <UserProvider>
            <ClientSideLayout>
              {children}
            </ClientSideLayout>
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}