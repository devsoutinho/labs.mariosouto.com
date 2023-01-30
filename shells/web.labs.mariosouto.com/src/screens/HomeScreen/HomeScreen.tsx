import { Box } from "@devsoutinho/sknui/web";
import { Workshop } from "@src/modules/workshops/repository";
import { Footer } from "./patterns/Footer";
import { HeroSection } from "./patterns/HeroSection";
import { Workshops } from "./patterns/Workshops";

interface HomeScreenProps {
  workshops: Workshop[];
}
export function HomeScreen({ workshops }: HomeScreenProps) {
  return (
    <Box>
      <HeroSection />
      <Workshops workshops={workshops} />
      <Footer />
    </Box>
  );
}
