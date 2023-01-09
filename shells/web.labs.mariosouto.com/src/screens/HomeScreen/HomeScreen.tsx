import React from "react";
import {
  Box,
  Text,
  useTheme,
  ScreenContainer,
  Form,
  InputText,
  Button,
  Icon,
} from "@devsoutinho/sknui/web";

export function HomeScreen() {
  const { theme } = useTheme();

  return (
    <ScreenContainer>
      <Box
        styleSheet={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: theme.colors.primary.x300,
        }}
      >
        <Text typographyToken={{ xs: "body1", lg: "display1" }}>
          Bem vindo!
        </Text>
        <Form
          onSubmit={() => {
            window.location.href = "/dashboard";
          }}
        >
          <InputText label="Email" />

          <Button type="submit" suffix={<Icon name="arrow_left" />}>
            Entrar agora!
          </Button>
          <Box
            styleSheet={{
              marginTop: "16px",
            }}
          >
            <Text>Ou faça login com</Text>
            <Box>
              <Button>Github</Button>
            </Box>
          </Box>
        </Form>
      </Box>
    </ScreenContainer>
  );
}
