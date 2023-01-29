import { coursesRepositories } from "@src/modules/courses/repository";

export { CourseScreen as default } from "@src/screens/CourseScreen/CourseScreen";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ params }: any) {
  const data = await coursesRepositories.getCourseBySlug(params.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      course: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await coursesRepositories.getAllCourses();

  return {
    paths: data.map((course) => ({
      params: {
        slug: course.slug,
      },
    })),
    fallback: "blocking",
  };
}
