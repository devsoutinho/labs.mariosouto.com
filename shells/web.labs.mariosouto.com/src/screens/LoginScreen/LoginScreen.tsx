import React from "react";
import {
  Box,
  Text,
  useTheme,
  ScreenContainer,
  Image,
  Link,
  InputText,
  Button,
  Form,
  useToast,
  Touchable,
} from "@devsoutinho/sknui/web";

export function LoginScreen() {
  const { theme } = useTheme();
  const toast = useToast();

  return (
    <ScreenContainer
      styleSheet={{
        backgroundColor: theme.colors.neutral.x050,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        styleSheet={{
          width: "100%",
          flex: {
            xs: 1,
            sm: 0,
          },
          maxWidth: {
            sm: "400px",
          },
          paddingTop: theme.spacing.x12,
          paddingBottom: {
            xs: theme.spacing.x_zero,
            sm: theme.spacing.x12,
          },
        }}
      >
        <Box
          styleSheet={{
            display: {
              xs: "flex",
              sm: "none",
            },
            flex: 1,
          }}
        />
        <Box
          styleSheet={{
            alignItems: "center",
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
          <Box
            styleSheet={{
              textAlign: "center",
            }}
          >
            <Text
              typographyToken="heading3"
              styleSheet={{
                marginTop: theme.spacing.x6,
              }}
            >
              Entre na sua conta
            </Text>
            <Text
              styleSheet={{
                textAlign: "center",
              }}
            >
              Ou <Link href="/dashboard">entre no modo público</Link>
            </Text>
          </Box>
        </Box>
        <Box
          styleSheet={{
            boxShadow: {
              xs: theme.shadow.default,
            },
            borderRadius: {
              sm: theme.rounded.lg,
            },
            backgroundColor: theme.colors.neutral.x000,
            marginTop: theme.spacing.x6,
            paddingY: theme.spacing.x8,
            paddingX: theme.spacing.x10,
            color: theme.colors.neutral.x500,
          }}
        >
          <Box
            styleSheet={{
              width: "100%",
              margin: "auto",
              maxWidth: {
                xs: "320px",
                sm: "100%",
              },
            }}
          >
            <Form
              onSubmit={() => {
                toast({
                  title: "Falha no login",
                  description: "Conta não cadastrada",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              }}
            >
              <InputText label="Email" />
              <Button type="submit">Entrar</Button>
            </Form>
            <Box
              styleSheet={{
                marginTop: theme.spacing.x6,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Box
                styleSheet={{
                  flex: 1,
                  height: theme.spacing.x_unit,
                  backgroundColor: theme.colors.neutral.x100,
                }}
              />
              <Text
                styleSheet={{
                  paddingX: theme.spacing.x2,
                }}
              >
                Ou continue com
              </Text>
              <Box
                styleSheet={{
                  flex: 1,
                  height: theme.spacing.x_unit,
                  backgroundColor: theme.colors.neutral.x100,
                }}
              />
            </Box>
            <Box
              styleSheet={{
                flexDirection: "row",
                marginTop: theme.spacing.x6,
              }}
            >
              <Button
                variant="secondary"
                onTap={() => {
                  toast({
                    title: "Falha no login",
                    description: "Esta opção está temporariamente desabilitada",
                    status: "warning",
                    duration: 9000,
                    isClosable: true,
                  });
                }}
                suffix={
                  <Box
                    tag="svg"
                    styleSheet={{
                      width: theme.spacing.x5,
                      height: theme.spacing.x5,
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clip-rule="evenodd"
                    ></path>
                  </Box>
                }
              >
                GitHub
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          styleSheet={{
            display: {
              xs: "flex",
              sm: "none",
            },
            flex: 1,
            backgroundColor: theme.colors.neutral.x000,
          }}
        />
      </Box>
    </ScreenContainer>
  );
}
