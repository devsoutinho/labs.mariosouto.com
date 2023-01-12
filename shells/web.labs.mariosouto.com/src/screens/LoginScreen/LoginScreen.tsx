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
          <Image
            src="https://www.datocms-assets.com/85225/1673400260-logo-devsoutinho.png"
            alt="Logo DevSoutinho"
            styleSheet={{
              borderRadius: theme.rounded.full,
              width: theme.spacing.x14,
              height: theme.spacing.x14,
            }}
          />
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
              Ou <Link href="/dashboard">acesse a área pública</Link>
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
