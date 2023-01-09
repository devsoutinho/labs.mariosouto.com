import React from "react";
import {
  Box,
  Text,
  Form,
  InputText,
  Button,
  Icon,
  useTheme,
} from "@devsoutinho/sknui/web";

export function HomeScreen() {
  const { theme } = useTheme();

  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: {
          xs: theme.colors.primary.x050,
          sm: theme.colors.primary.x100,
          md: theme.colors.primary.x200,
          lg: theme.colors.primary.x300,
          xl: theme.colors.primary.x400,
        },
      }}
    >
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
  );
}
