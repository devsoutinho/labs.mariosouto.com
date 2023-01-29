import { Box, Button, Text } from "@devsoutinho/sknui/web";
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
      <Button
        onTap={() => {
          alert("Comprar");
        }}
      >
        Comprar
      </Button>
    </Box>
  );
}
