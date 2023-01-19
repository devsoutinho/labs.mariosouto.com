import { Box, Text, Link, useTheme } from "@devsoutinho/sknui/web";

const challenges = [
  {
    title: "#001 - CSS Preview Border Radius",
    link: "https://labs.mariosouto.com/challenges/001-css-preview-border-radius",
  },
];

export function DashboardScreen() {
  const { theme } = useTheme();
  return (
    <Box
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: theme.colors.neutral.x050,
      }}
    >
      <Box
        styleSheet={{
          maxWidth: "800px",
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: theme.rounded.md,
          boxShadow: theme.shadow.default,
          padding: theme.spacing.x6,
          backgroundColor: theme.colors.neutral.x000,
        }}
      >
        <Text
          tag="h1"
          typographyToken={{
            xs: "heading3",
            md: "heading2",
          }}
        >
          DevSoutinho Challenges
        </Text>
        <Box
          tag="ul"
          styleSheet={{
            marginTop: theme.spacing.x6,
            marginBottom: theme.spacing.x6,
          }}
        >
          {challenges.map((challenge) => (
            <Text tag="li" key={challenge.link}>
              <Link href={challenge.link}>{challenge.title}</Link>
            </Text>
          ))}
        </Box>
        <Link href="/">Voltar ao login</Link>
      </Box>
    </Box>
  );
}
