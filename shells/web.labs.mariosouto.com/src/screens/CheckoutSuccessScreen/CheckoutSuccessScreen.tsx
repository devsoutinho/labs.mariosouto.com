import { Box, Text } from "@devsoutinho/sknui/web";

export function CheckoutSuccessScreen() {
  return (
    <Box>
      <Text tag="h1">Compra realizada com sucesso!</Text>
      <Box>
        Confira o e-mail usado durante o pagamento para saber os próximos passos
      </Box>
    </Box>
  );
}
