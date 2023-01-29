import { Box, Text, useTheme } from "@devsoutinho/sknui/web";

export function Footer() {
  const { theme } = useTheme();
  return (
    <Box
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
        color: theme.colors.neutral.x100,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        paddingY: "48px",
        paddingX: "24px",
      }}
    >
      <Text typographyToken="body2">
        Feito com ❤️ por Mario Souto (DevSoutinho)
      </Text>
    </Box>
  );
}
