import { Box, Button, Text } from "@devsoutinho/sknui/web";
import { getDB } from "@src/infra/db";
import { Course } from "@src/modules/courses/repository";

interface CourseScreenProps {
  course: Course;
}
export function CourseScreen({ course }: CourseScreenProps) {
  return (
    <Box>
      <Text tag="h1">{course.name}</Text>
      <Box>{course.description}</Box>
      <Box>Esse curso é um TESTE e nada será entregue caso efetue a compra</Box>
      <form action="/api/checkout" method="POST">
        <Button
          type="submit"
          onTap={async () => {
            const db = getDB();
            const { data } = await db.auth.getSession();

            // eslint-disable-next-line no-console
            console.log("Comprar: ", data.session?.user.email);
          }}
        >
          Comprar
        </Button>
      </form>
    </Box>
  );
}