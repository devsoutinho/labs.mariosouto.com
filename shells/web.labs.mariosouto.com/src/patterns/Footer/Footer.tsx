import {
  Box,
  Text,
  Icon,
  IconNames,
  useTheme,
  Touchable,
} from "@devsoutinho/sknui/web";

const navigation = [
  {
    name: "Discord",
    href: "https://mariosouto.com/discord",
    icon: "discord",
  },
  {
    name: "GitHub",
    href: "https://github.com/omariosouto",
    icon: "github",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/devsoutinho",
    icon: "instagram",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/omariosouto",
    icon: "twitter",
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@DevSoutinho",
    icon: "youtube",
  },
];

export function Footer() {
  const { theme } = useTheme();
  return (
    <Box
      tag="footer"
      styleSheet={{
        backgroundColor: theme.colors.neutral.x900,
      }}
    >
      <Box
        styleSheet={{
          width: "100%",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          paddingY: {
            xs: theme.spacing.x12,
          },
          paddingX: {
            xs: theme.spacing.x6,
            md: theme.spacing.x8,
          },
        }}
      >
        <Box
          styleSheet={{
            flexDirection: "row",
            justifyContent: "center",
            gap: theme.spacing.x6,
            order: {
              md: 2,
            },
          }}
        >
          {navigation.map((item) => (
            <Touchable
              key={item.name}
              href={item.href}
              styleSheet={{
                color: theme.colors.neutral.x400,
              }}
            >
              <Text srOnly>{item.name}</Text>
              <Icon name={item.icon as IconNames} aria-hidden="true" />
            </Touchable>
          ))}
        </Box>
        <Box
          styleSheet={{
            marginTop: {
              xs: theme.spacing.x8,
              md: theme.spacing.x_zero,
            },
            order: {
              md: 1,
            },
          }}
        >
          <Text
            typographyToken={"body4"}
            styleSheet={{
              textAlign: "center",
              color: theme.colors.neutral.x500,
            }}
          >
            &copy; 2022 DevSoutinho Tech. Todos os direitos reservados.
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
