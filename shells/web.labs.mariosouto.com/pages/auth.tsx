import { useRouter } from "next/router";
import { Box, Text } from "@devsoutinho/sknui/web";
import React from "react";

export default function AuthScreen() {
  const router = useRouter();

  React.useEffect(() => {
    if (router.isReady) router.push("/dashboard");
  }, [router]);

  return (
    <Box>
      <Text>...</Text>
    </Box>
  );
}
