import {
  Box,
  Text,
  Link,
  useTheme,
  Touchable,
  Image,
} from "@devsoutinho/sknui/web";

const challenges = [
  {
    title: "#001 - CSS Preview Border Radius",
    link: "https://labs.mariosouto.com/challenges/001-css-preview-border-radius",
  },
];

export function DashboardScreen() {
  const { theme } = useTheme();
  const maxWidth = "600px";
  return (
    <Box
      styleSheet={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        padding: theme.spacing.x4,
        backgroundColor: theme.colors.neutral.x050,
      }}
    >
      <Box
        styleSheet={{
          width: "100%",
          maxWidth: maxWidth,
          alignSelf: "center",
          justifyContent: "center",
          borderRadius: theme.rounded.md,
          boxShadow: theme.shadow.default,
          padding: theme.spacing.x6,
          marginBottom: theme.spacing.x6,
          backgroundColor: theme.colors.neutral.x000,
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Touchable href="/">
            <Image
              src="https://www.datocms-assets.com/85225/1673400260-logo-devsoutinho.png"
              alt="Logo DevSoutinho"
              styleSheet={{
                borderRadius: theme.rounded.full,
                width: theme.spacing.x20,
                height: theme.spacing.x20,
              }}
            />
          </Touchable>
        </Box>
        <Text
          tag="h1"
          typographyToken={{
            xs: "heading2",
            md: "heading1",
          }}
        >
          Olá!
        </Text>
        <Text
          styleSheet={{
            marginTop: theme.spacing.x2,
          }}
        >
          Você está acessando o #DevSoutinhoLabs no modo público, o que
          significa que você pode ver os challenges, mas em breve para poder
          colecionar conquistas e outras novidades vamos librar o acesso logado.
          <br />
          <br />
          Por hora, convido você a fazer o challenge atual e participar do nosso
          discord!
          <br />
          <br />
        </Text>
        <Link href="https://mariosouto.com/discord">Discord</Link>
      </Box>
      <Box
        styleSheet={{
          width: "100%",
          maxWidth: maxWidth,
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
            paddingLeft: theme.spacing.x4,
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
