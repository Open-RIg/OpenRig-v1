import React from "react";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
    title: "Connexion - OpenRig",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-800" style={{ backgroundImage: `url('https://picsum.photos/1900/1080')`, backgroundSize: 'cover' }}>
        <div className="flex items-center  min-h-screen"><LoginForm /></div>
      </body>
    </html>
  );
}
