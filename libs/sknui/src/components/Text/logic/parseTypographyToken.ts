/* eslint-disable @typescript-eslint/no-explicit-any */

export function parseResponsiveToken(
  responsiveToken: any,
  themeTokens: any,
  defaultValue: any
) {
  if (typeof responsiveToken === "string") {
    return themeTokens[responsiveToken];
  }
  if (typeof responsiveToken === "object") {
    const styles = {} as any;
    Object.entries(responsiveToken).forEach(([breakpointKey, value]: any) => {
      const currentValue = themeTokens[value];
      Object.entries(currentValue).forEach(([property, currentValue]) => {
        const stylesOfCurrentProperty = styles[property] || {};
        styles[property] = {
          ...stylesOfCurrentProperty,
          [breakpointKey]: currentValue,
        };
      });

      return {
        [breakpointKey]: currentValue,
      };
    });

    return styles;
  }

  return defaultValue;
}
