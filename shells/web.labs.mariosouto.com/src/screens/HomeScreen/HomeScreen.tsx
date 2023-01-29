import { Box } from "@devsoutinho/sknui/web";
import { Workshop } from "@src/modules/workshops/repository";
import { Footer } from "./patterns/Footer";
import { Workshops } from "./patterns/Workshops";

interface HomeScreenProps {
  workshops: Workshop[];
}
export function HomeScreen({ workshops }: HomeScreenProps) {
  return (
    <Box>
      <Workshops workshops={workshops} />
      <Footer />
    </Box>
  );
}
