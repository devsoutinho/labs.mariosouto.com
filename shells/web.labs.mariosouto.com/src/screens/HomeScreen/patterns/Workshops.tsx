import { Box, Image, Text, Touchable, useTheme } from "@devsoutinho/sknui/web";
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
            <Touchable
              href={
                workshop.premium
                  ? `/workshops/${workshop.slug}`
                  : workshop.externalUrl
              }
              key={workshop.title}
              styleSheet={{
                flexDirection: "column",
                borderRadius: theme.rounded.lg,
                boxShadow: theme.shadow.lg,
                overflow: "hidden",
              }}
            >
              <Box
                styleSheet={{
                  flexShrink: 0,
                }}
              >
                <Image
                  src={workshop.image.url}
                  alt={workshop.image.alt}
                  styleSheet={{
                    aspectRatio: "16/9",
                  }}
                />
              </Box>
              <Box
                styleSheet={{
                  flex: 1,
                  width: "100%",
                  flexDirection: "column",
                  textAlign: "left",
                  justifyContent: "space-between",
                  backgroundColor: theme.colors.neutral.x000,
                  padding: theme.spacing.x6,
                }}
              >
                <Box
                  styleSheet={{
                    flex: 1,
                  }}
                >
                  <Box
                    tag="span"
                    styleSheet={{
                      marginTop: theme.spacing.x2,
                    }}
                  >
                    <Text
                      typographyToken="heading4"
                      styleSheet={{
                        color: theme.colors.neutral.x900,
                      }}
                    >
                      {workshop.title}
                    </Text>
                    <Text
                      typographyToken="body2"
                      styleSheet={{
                        marginTop: theme.spacing.x3,
                        color: theme.colors.neutral.x500,
                      }}
                    >
                      {workshop.excerpt}
                    </Text>
                  </Box>
                </Box>
              </Box>
            </Touchable>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

Workshops.defaultProps = {
  workshops: [],
};
