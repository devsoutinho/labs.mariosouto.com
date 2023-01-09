import React from "react";
import {
  Box,
  Text,
  Form,
  InputText,
  Button,
  Icon,
} from "@devsoutinho/sknui/web";

export function HomeScreen() {
  return (
    <Box
      styleSheet={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
