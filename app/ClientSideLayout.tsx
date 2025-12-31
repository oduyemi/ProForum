"use client";

import { ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box } from "@chakra-ui/react";

export default function ClientSideLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isAdminRoute = pathname?.startsWith("/admin") ?? false;

  useEffect(() => {
    if (isAdminRoute) {
      const token = localStorage.getItem("token");
      if (!token) router.push("/admin/login");
    }
  }, [isAdminRoute, router]);

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      className="bg-gray-50"
    >
      {children}
    </Box>
  );
}
