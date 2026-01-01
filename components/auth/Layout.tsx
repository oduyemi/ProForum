import { ReactNode } from "react";
import Link from "next/link";

export function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md space-y-6 rounded-2xl border border-[#C69DD220] bg-[#0e0e0e] p-6">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">{title}</h1>
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>

        {children}

        <p className="text-center text-xs text-gray-500">
          By continuing, you agree to grow intentionally 
        </p>
      </div>
    </div>
  );
}
