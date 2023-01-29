import { Box, Link, Text } from "@devsoutinho/sknui/web";

interface Course {
  id: string;
  name: string;
  description: string;
  slug: string;
}

interface CoursesScreenProps {
  courses: Course[];
}
export function CoursesScreen({ courses }: CoursesScreenProps) {
  return (
    <Box>
      <Box>Cursos e Aulas Ao vivo!</Box>

      <Box
        tag="ul"
        styleSheet={{
          padding: "16px",
        }}
      >
        {courses.map((course) => (
          <Text
            key={course.id}
            tag="li"
            styleSheet={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              display: "list-item" as any,
              listStyleType: "disc",
            }}
          >
            <Link href={`/courses/${course.slug}`}>{course.name}</Link>
          </Text>
        ))}
      </Box>
    </Box>
  );
}
