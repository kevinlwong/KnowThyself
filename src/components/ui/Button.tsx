// src/components/ui/Button.tsx
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors";
  const styles: Record<string, string> = {
    primary: "bg-purple-700 text-white hover:bg-purple-800",
    secondary: "border border-white text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${baseStyle} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
