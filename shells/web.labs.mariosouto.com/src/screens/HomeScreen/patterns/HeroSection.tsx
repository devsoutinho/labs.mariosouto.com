import {
  Box,
  Button,
  Image,
  Link,
  Text,
  Touchable,
  useTheme,
} from "@devsoutinho/sknui/web";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <Box
      styleSheet={{
        position: "relative",
        backgroundColor: theme.colors.neutral.x000,
        isolation: "isolate",
      }}
    >
      <BgPattern />
      <Box
        styleSheet={{
          maxWidth: "1280px",
          width: "100%",
          margin: "auto",
          flexDirection: {
            sm: "row",
          },
          paddingX: {
            xs: theme.spacing.x6,
            md: theme.spacing.x8,
          },
          paddingY: {
            xs: theme.spacing.x6,
            md: theme.spacing.x16,
          },
        }}
      >
        <Box
          styleSheet={{
            flex: {
              xs: "1",
              lg: "2",
            },
            padding: {
              xs: theme.spacing.x_zero,
              lg: theme.spacing.x9,
            },
            marginX: {
              xs: "auto",
              lg: theme.spacing.x_zero,
            },
            maxWidth: {
              xs: "672px",
              lg: "576px",
            },
            flexShrink: {
              lg: "0",
            },
            paddingTop: {
              lg: theme.spacing.x8,
            },
          }}
        >
          <Touchable
            href="/"
            styleSheet={{
              width: "60px",
            }}
          >
            <Image
              src="https://github.com/devsoutinho.png"
              alt="Your Company"
            />
          </Touchable>
          <Box
            styleSheet={{
              marginTop: {
                xs: theme.spacing.x4,
                lg: theme.spacing.x8,
              },
            }}
          >
            <Link
              styleSheet={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: theme.spacing.x6,
              }}
              href="https://github.com/devsoutinho/labs.mariosouto.com/blob/main/CHANGELOG.md"
            >
              <Text
                tag="span"
                styleSheet={{
                  color: theme.colors.primary.x600,
                  backgroundColor: theme.colors.primary.x050,
                  borderRadius: theme.rounded.full,
                  border: `1px solid ${theme.colors.primary.x600}`,
                  paddingX: theme.spacing.x3,
                  paddingY: theme.spacing.x1,
                }}
                typographyToken="body3"
              >
                {"Novidades"}
              </Text>
              <Text
                tag="span"
                styleSheet={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: theme.spacing.x2,
                  color: theme.colors.neutral.x600,
                }}
                typographyToken="body3"
              >
                <Box tag="span">CHANGELOG v1.0</Box>
                <ChevronRightIcon
                  style={{
                    width: theme.spacing.x5,
                    height: theme.spacing.x5,
                    color: theme.colors.neutral.x400,
                  }}
                  aria-hidden="true"
                />
              </Text>
            </Link>
          </Box>
          <Text
            typographyToken={{
              xs: "heading3",
              md: "heading2",
            }}
            styleSheet={{
              marginTop: theme.spacing.x10,
            }}
          >
            DevSoutinho Labs
          </Text>
          <Text
            typographyToken="body1"
            styleSheet={{
              marginTop: theme.spacing.x6,
              color: theme.colors.neutral.x600,
            }}
          >
            O espaço perfeito pra você praticar programação aprender e
            compartilhar
          </Text>
          <Box
            styleSheet={{
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              marginTop: theme.spacing.x10,
              alignItems: {
                xs: "center",
              },
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              gap: {
                xs: theme.spacing.x2,
                sm: theme.spacing.x10,
              },
            }}
          >
            <Button
              styleSheet={{
                flex: {
                  xs: "none",
                  md: "2",
                },
              }}
              onTap={() => {
                const element = document.getElementById("workshops");
                if (element)
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Conheça os Workshops
            </Button>
            <Link
              href="/login"
              styleSheet={{
                flex: {
                  xs: "none",
                  md: "1",
                },
                textDecoration: "none",
              }}
            >
              Entrar <span aria-hidden="true">→</span>
            </Link>
          </Box>
        </Box>
        <Box
          styleSheet={{
            display: {
              xs: "none",
              md: "flex",
            },
            flex: 1,
            width: "100%",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box
            styleSheet={{
              width: "100%",
              flex: 1,
              maxWidth: {
                xs: "768px",
                sm: "1024px",
                lg: "none",
              },
            }}
          >
            <Box
              styleSheet={{
                flex: 1,
                borderRadius: {
                  xs: theme.rounded.xl,
                  lg: theme.rounded["2xl"],
                },
                margin: {
                  xs: "-8px",
                  lg: "-16px",
                },
                background:
                  "rgba(17, 24, 39, 0.05) none repeat scroll 0% 0% / auto padding-box border-box",
                boxShadow:
                  "'rgb(255, 255, 255) 0px 0px 0px 0px inset, rgba(17, 24, 39, 0.1) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0) 0px 0px 0px 0px'",
                padding: {
                  xs: theme.spacing.x2,
                  lg: theme.spacing.x4,
                },
              }}
            >
              <Image
                src="/images/home-image-discord.png"
                alt="App screenshot"
                styleSheet={{
                  width: "100%",
                  flex: 1,
                  overflow: "hidden",
                  borderRadius: theme.rounded.md,
                  boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function BgPattern() {
  const { theme } = useTheme();

  return (
    <Box
      tag="svg"
      styleSheet={{
        position: "absolute",
        top: "0",
        right: "0",
        left: "0",
        bottom: "0",
        width: "100%",
        height: "100%",
        zIndex: "-10",
        stroke: theme.colors.neutral.x200,
        maskImage: "radial-gradient(100% 100% at top right,white,transparent)",
      }}
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
          width={200}
          height={200}
          x="50%"
          y={-1}
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
      />
    </Box>
  );
}
