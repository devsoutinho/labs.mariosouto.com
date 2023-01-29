export { CoursesScreen as default } from "@src/screens/CoursesScreen/CoursesScreen";

export function getStaticProps() {
  return {
    props: {
      slug: "courses",
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
