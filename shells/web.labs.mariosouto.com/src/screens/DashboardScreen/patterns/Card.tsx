import { Box, useTheme } from "@devsoutinho/sknui/web";

interface CardProps {
  children: React.ReactNode;
}
export function Card({ children }: CardProps) {
  const { theme } = useTheme();
  const maxWidth = "600px";

  return (
    <Box
      styleSheet={{
        width: "100%",
        maxWidth: maxWidth,
        alignSelf: "center",
        justifyContent: "center",
        borderRadius: theme.rounded.md,
        boxShadow: theme.shadow.default,
        marginTop: theme.spacing.x6,
        padding: theme.spacing.x6,
        backgroundColor: theme.colors.neutral.x000,
      }}
    >
      {children}
    </Box>
  );
}
