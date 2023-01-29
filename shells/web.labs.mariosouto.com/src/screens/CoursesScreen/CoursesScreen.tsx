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
    <div>
      <h1>Courses Screen</h1>

      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <a href={`/courses/${course.slug}`}>{course.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
