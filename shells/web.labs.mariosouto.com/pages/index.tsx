import { workshopsRepository } from "@src/modules/workshops/repository";

export { HomeScreen as default } from "@src/screens/HomeScreen/HomeScreen";

export async function getStaticProps() {
  return {
    props: {
      workshops: await workshopsRepository.getWorkshops(),
    },
  };
}
