import { Box, Link, Text } from "@devsoutinho/sknui/web";
import { Workshop } from "@src/modules/workshops/repository";

interface WorkshopsScreenProps {
  workshops: Workshop[];
}
export function WorkshopsScreen({ workshops }: WorkshopsScreenProps) {
  return (
    <Box>
      <Box>Workshops ao vivo</Box>

      <Box
        tag="ul"
        styleSheet={{
          padding: "16px",
        }}
      >
        {workshops.map((workshop) => (
          <Text
            key={workshop.id}
            tag="li"
            styleSheet={{
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              display: "list-item" as any,
              listStyleType: "disc",
            }}
          >
            <Link href={`/workshops/${workshop.slug}`}>{workshop.name}</Link>
          </Text>
        ))}
      </Box>
    </Box>
  );
}
