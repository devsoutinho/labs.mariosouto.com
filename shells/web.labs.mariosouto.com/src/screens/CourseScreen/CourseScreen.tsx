import { Box, Button, Text } from "@devsoutinho/sknui/web";
import { getStripe } from "@src/infra/stripe";
import { Course } from "@src/modules/courses/repository";
import { userRepository } from "@src/modules/user/repository";
import React from "react";

interface CourseScreenProps {
  course: Course;
}

export function CourseScreen({ course }: CourseScreenProps) {
  const [userEmail, setUserEmail] = React.useState<string | null>(null);

  const redirectToCheckout = async () => {
    const item = {
      price: "price_1MVdm4LN2utuQszI6CIWZzje",
      quantity: 1,
    };
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [item],
      mode: "payment",
      ...(userEmail && { customerEmail: userEmail }),
      successUrl: `${window.location.origin}/checkout/success`,
      cancelUrl: `${window.location.origin}/checkout/cancel`,
    });

    if (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    (async () => {
      const email = await userRepository.getUserEmail();
      // eslint-disable-next-line no-console
      console.log(email);
      if (typeof email === "string") setUserEmail(email);
    })();
  }, []);

  return (
    <Box
      styleSheet={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Text tag="h1" typographyToken="heading2">
        {course.name}
      </Text>
      <Box>{course.description}</Box>

      <Button type="submit" onTap={redirectToCheckout}>
        Comprar
      </Button>
    </Box>
  );
}
