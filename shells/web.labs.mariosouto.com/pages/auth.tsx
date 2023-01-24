import { useRouter } from "next/router";
import { Box, Text } from "@devsoutinho/sknui/web";
import React from "react";

export default function AuthScreen() {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <Box>
      <Text>...</Text>
    </Box>
  );
}
