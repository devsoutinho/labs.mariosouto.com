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
        flex: 1,
        maxWidth: "400px",
        alignSelf: "center",
        justifyContent: "center",
      }}
    >
      <Text tag="h1" typographyToken="heading1">
        #DevSoutinhoChallenges
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
  );
}
