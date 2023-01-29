import { coursesRepositories } from "@src/modules/courses/repository";

export { CoursesScreen as default } from "@src/screens/CoursesScreen/CoursesScreen";

export async function getStaticProps() {
  const data = await coursesRepositories.getAllCourses();

  return {
    props: {
      courses: data,
    },
  };
}
