import { Box, Button, Text } from "@devsoutinho/sknui/web";
import { getStripe } from "@src/infra/stripe";
import { userRepository } from "@src/modules/user/respository";
import {
  Workshop,
  workshopsRepository,
} from "@src/modules/workshops/repository";
import React from "react";

interface WorkshopScreenProps {
  workshop: Workshop;
}

export function WorkshopScreen({ workshop }: WorkshopScreenProps) {
  const [loading, setLoading] = React.useState(true);
  const [isUserOwner, setIsUserOwner] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState<string | null>(null);

  const redirectToCheckout = async () => {
    const item = {
      price: workshop.stripe_price_id,
      quantity: 1,
    };
    const stripe = await getStripe();

    const { error } = await stripe.redirectToCheckout({
      lineItems: [item],
      mode: "payment",
      ...(userEmail && { customerEmail: userEmail }),
      successUrl: `${window.location.origin}/checkout/success?workshop_id=${workshop.id}`,
      cancelUrl: `${window.location.origin}/checkout/cancel?workshop_id=${workshop.id}`,
    });

    if (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    (async () => {
      const customerId = await userRepository.getUserIdFromSession();
      const email = await userRepository.getUserEmail();

      if (typeof email === "string") setUserEmail(email);

      if (email) {
        const isUserOwner = await workshopsRepository.isUserOwnerOfWorkshop(
          workshop.id,
          customerId
        );
        setIsUserOwner(isUserOwner);
      }

      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Box>Carregando...</Box>;

  if (isUserOwner) {
    return (
      <Box>
        Você já comprou este workshop, procure em seu e-mail pelos próximos
        passos
      </Box>
    );
  }

  return (
    <Box
      styleSheet={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Text tag="h1" typographyToken="heading2">
        {workshop.name}
      </Text>
      <Box>{workshop.description}</Box>

      <Button type="submit" onTap={redirectToCheckout}>
        {userEmail ? "Comprar como " : "Comprar"}
        {userEmail}
      </Button>
    </Box>
  );
}
