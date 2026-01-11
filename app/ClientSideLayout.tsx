import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

export default function ClientSideLayout({
  children,
}: {
  children: ReactNode;
}) {
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
