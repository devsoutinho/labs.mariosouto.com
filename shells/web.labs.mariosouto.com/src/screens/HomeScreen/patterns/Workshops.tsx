import { Box, Text, useTheme } from "@devsoutinho/sknui/web";
import { Workshop } from "@src/modules/workshops/repository";

interface WorkshopsProps {
  workshops: Workshop[];
}
export function Workshops({ workshops }: WorkshopsProps) {
  const { theme } = useTheme();
  return (
    <Box
      id="workshops"
      styleSheet={{
        position: "relative",
        backgroundColor: theme.colors.neutral.x050,
        paddingX: {
          xs: theme.spacing.x6,
          lg: theme.spacing.x8,
        },
        paddingTop: {
          xs: theme.spacing.x10,
          md: theme.spacing.x6,
        },
        paddingBottom: {
          xs: theme.spacing.x20,
          lg: theme.spacing.x28,
        },
      }}
    >
      <Box
        styleSheet={{
          position: "absolute",
          top: theme.spacing.x_zero,
          bottom: theme.spacing.x_zero,
          left: theme.spacing.x_zero,
          right: theme.spacing.x_zero,
        }}
      >
        <Box
          styleSheet={{
            height: {
              xs: "33%",
              sm: "66%",
            },
            backgroundColor: theme.colors.neutral.x000,
          }}
        />
      </Box>
      <Box
        styleSheet={{
          position: "relative",
          marginX: "auto",
          maxWidth: "1280px",
        }}
      >
        <Box
          styleSheet={{
            textAlign: "center",
          }}
        >
          <Text
            tag="h2"
            typographyToken={{
              xs: "heading3",
              md: "heading2",
            }}
          >
            Workshops e Mini Cursos
          </Text>
        </Box>
        <Box
          styleSheet={{
            marginX: "auto",
            marginTop: theme.spacing.x12,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            display: "grid" as any,
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1fr 1fr 1fr",
            },
            gap: theme.spacing.x5,
            maxWidth: {
              xs: "512px",
              lg: "none",
            },
          }}
        >
          {workshops.map((workshop) => (
            <div
              key={workshop.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={workshop.coverUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-indigo-600">
                    <a href={workshop.category.href} className="hover:underline">
                      {workshop.category.name}
                    </a>
                  </p> */}
                  <a href={workshop.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {workshop.title}
                    </p>
                    {/* <p className="mt-3 text-base text-gray-500">
                      {workshop.description}
                    </p> */}
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    {/* <a href={workshop.author.href}>
                      <span className="sr-only">{workshop.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={workshop.author.imageUrl}
                        alt=""
                      />
                    </a> */}
                  </div>
                  <div className="ml-3">
                    {/* <p className="text-sm font-medium text-gray-900">
                      <a
                        href={workshop.author.href}
                        className="hover:underline"
                      >
                        {workshop.author.name}
                      </a>
                    </p> */}
                    {/* <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={workshop.datetime}>{workshop.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{workshop.readingTime} read</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Workshops.defaultProps = {
  workshops: [],
};
