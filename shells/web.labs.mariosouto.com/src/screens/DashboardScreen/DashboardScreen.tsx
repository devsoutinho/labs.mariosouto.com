import {
  Box,
  Text,
  Link,
  useTheme,
  Touchable,
  Image,
  Button,
} from "@devsoutinho/sknui/web";
import { logout } from "@src/infra/auth/login";
import { getDB } from "@src/infra/db";
import React from "react";

const challenges = [
  {
    title: "#001 - CSS Preview Border Radius",
    link: "https://labs.mariosouto.com/challenges/001-css-preview-border-radius",
  },
  {
    title: "#002 - Desenho com CSS : Bandeiras",
    link: "https://labs.mariosouto.com/challenges/002-css-flags-css",
  },
];

interface Profile {
  id: string;
  first_name: string;
  avatar_url: string;
}
export function DashboardScreen() {
  const { theme } = useTheme();
  const maxWidth = "600px";
  const [profile, setProfile] = React.useState<Partial<Profile>>();
  const db = getDB();
  const isUserLoggedIn = Boolean(profile);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const userInfo = await db.auth.getUser();

        if (userInfo.data.user?.user_metadata) {
          setProfile({
            id: userInfo.data.user.id,
            first_name: userInfo.data.user.user_metadata.name.split(" ")[0],
            avatar_url: userInfo.data.user.user_metadata.avatar_url,
          });
          return;
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [db]);

  React.useEffect(() => {
    (async () => {
      const session = await db.auth.getSession();

      fetch("/api/devsoutinho-labs/student", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.data.session?.access_token}`,
        },
      }).then(async (res) => {
        if (res.ok) {
          const output = await res.json();
          // eslint-disable-next-line no-console
          console.log(output);
        }
      });
    })();
  }, []);

  if (isLoading) return <Text>Loading...</Text>;

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
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: theme.spacing.x4,
          }}
        >
          {profile?.avatar_url && (
            <Image
              src={profile.avatar_url}
              alt="Avatar"
              styleSheet={{
                width: theme.spacing.x20,
                height: theme.spacing.x20,
                borderRadius: theme.rounded.full,
              }}
            />
          )}
          <Text
            tag="h1"
            typographyToken={{
              xs: "heading3",
              md: "heading1",
            }}
          >
            Olá,
            {profile && ` ${profile.first_name}`}
          </Text>
        </Box>
        <Text
          styleSheet={{
            marginTop: theme.spacing.x4,
          }}
        >
          {isUserLoggedIn
            ? `Obrigado por se cadastrar! Em breve teremos mais novidades, como achievements, conteúdo exclusivo e muito mais.`
            : `Você está acessando o #DevSoutinhoLabs no modo público, o que
          significa que você pode ver os challenges, mas em breve para poder
          colecionar conquistas e outras novidades vamos librar o acesso logado.`}
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
        <Link href="/login">Voltar ao login</Link>
      </Box>
      {isUserLoggedIn && (
        <Box
          styleSheet={{
            marginTop: theme.spacing.x6,
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
          <Button onTap={async () => await logout()}>Logout</Button>
        </Box>
      )}
    </Box>
  );
}
