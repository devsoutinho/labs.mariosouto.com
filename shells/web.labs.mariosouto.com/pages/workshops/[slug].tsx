import { workshopsRepository } from "@src/modules/workshops/repository";

export { WorkshopScreen as default } from "@src/screens/WorkshopScreen/WorkshopScreen";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getStaticProps({ params }: any) {
  const data = await workshopsRepository.getBySlug(params.slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      workshop: data,
    },
  };
}

export async function getStaticPaths() {
  const data = await workshopsRepository.getAll();

  return {
    paths: data.map((workshop) => ({
      params: {
        slug: workshop.slug,
      },
    })),
    fallback: "blocking",
  };
}
