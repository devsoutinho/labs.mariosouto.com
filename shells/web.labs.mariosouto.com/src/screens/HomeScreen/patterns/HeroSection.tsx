import {
  Box,
  Button,
  Image,
  Link,
  Text,
  useTheme,
} from "@devsoutinho/sknui/web";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export function HeroSection() {
  const { theme } = useTheme();
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
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
      </svg>
      <Box
        styleSheet={{
          maxWidth: "1280px",
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
          }}
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
        >
          <Image
            styleSheet={{
              width: "60px",
            }}
            src="https://github.com/devsoutinho.png"
            alt="Your Company"
          />
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
              href="https://github.com/devsoutinho/labs.mariosouto.com#readme"
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
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>CHANGELOG v1.0</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
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
          <p className="mt-6 text-lg leading-8 text-gray-600">
            O espaço perfeito pra você praticar programação aprender e
            compartilhar
          </p>
          <Box
            styleSheet={{
              flexDirection: "row",
              marginTop: {
                xs: theme.spacing.x4,
                md: theme.spacing.x10,
              },
              alignItems: {
                xs: "center",
              },
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              gap: {
                xs: theme.spacing.x4,
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
                  element.scrollIntoView({ behavior: "smooth", block: "end" });
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
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <Box className="max-w-3xl sm:max-w-5xl lg:max-w-none">
            <Box className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src="/images/home-image-discord.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
