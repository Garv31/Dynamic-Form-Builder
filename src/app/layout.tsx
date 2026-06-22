import type { Metadata } from "next";
import "./globals.css";

import AuthProvider from "@/components/auth/AuthProvider";

export const metadata: Metadata = {
  title: "Dynamic Form Builder",
  description: "Form Builder App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}