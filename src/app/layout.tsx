// src/app/layout.tsx
import "../styles/globals.css"; // Global styles
import { AuthProvider } from "@/context/AuthContext";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            <Header />
            <div className="p-6">{children}</div>
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
