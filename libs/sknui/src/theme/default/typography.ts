export const DEFAULT_TYPOGRAPHY = {
  display1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "60px",
  },
  heading1: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "48px",
  },
  heading2: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "36px",
  },
  heading3: {
    fontWeight: 700,
    lineHeight: 1.1,
    fontSize: "30px",
  },
  heading4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "20px",
  },
  heading5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: "16px",
  },
  body1: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "18px",
  },
  body2: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "16px",
  },
  body3: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "14px",
  },
  body4: {
    fontWeight: 400,
    lineHeight: 1.6,
    fontSize: "12px",
  },
  body5: {
    fontWeight: 400,
    lineHeight: 1.5,
    fontSize: "8px",
  },
} as const;

export type TypographyToken = keyof typeof DEFAULT_TYPOGRAPHY;
