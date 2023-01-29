import { workshopsRepository } from "@src/modules/workshops/repository";

export { WorkshopsScreen as default } from "@src/screens/WorkshopsScreen/WorkshopsScreen";

export async function getStaticProps() {
  const data = await workshopsRepository.getAll();

  return {
    props: {
      workshops: data,
    },
  };
}
