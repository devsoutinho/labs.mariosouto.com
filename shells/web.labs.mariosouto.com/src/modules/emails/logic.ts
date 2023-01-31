/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from "@devsoutinho/sknui/src/theme/default/theme";

const baseText = theme.typography.body2;

export function parseDatoContentToMjml(value: any): any {
  if (value.document) {
    return parseDatoContentToMjml(value.document);
  }

  if (value.type === "paragraph") {
    const children = value.children.map(parseDatoContentToMjml).join("");

    return `
      <mj-text
        font-size="${baseText.fontSize}"
        font-weight="${baseText.fontWeight}"
        line-height="${baseText.lineHeight}"
      >
        ${children}
      </mj-text>
    `;
  }

  if (value.type === "heading") {
    const children = value.children.map(parseDatoContentToMjml).join("");
    const typography = (theme.typography as any)[
      `heading${value.level}` as any
    ];

    return `
    <mj-text
      font-size="${typography.fontSize}"
      font-weight="${typography.fontWeight}"
      line-height="${typography.lineHeight}"
    >
      ${children}
    </mj-text>
    `;
  }

  if (value.type === "list") {
    const style = value.style;

    const children = value.children
      .map(parseDatoContentToMjml)
      .map((child: any, index: number) => {
        if (style === "numbered") {
          return `
          <mj-text
            font-size="${baseText.fontSize}"
            font-weight="${baseText.fontWeight}"
            line-height="${baseText.lineHeight}"
          >
            ${index + 1}. ${child}
          </mj-text>
        `;
        }
        return `
        <mj-text
          font-size="${baseText.fontSize}"
          font-weight="${baseText.fontWeight}"
          line-height="${baseText.lineHeight}"
        >
          - ${child}
        </mj-text>
        `;
      })
      .join("");
    return children;
  }

  if (value.type === "link") {
    const children = value.children.map(parseDatoContentToMjml).join("");
    const meta = value.meta;
    const target = meta?.target || "_blank";

    return `
      <a
        href="${value.url}"
        style="color: ${theme.colors.primary.x500};text-decoration:underline;"
        target="${target}"
      >
        ${children}
      </a>
    `;
  }

  if (value.children) {
    return value.children.map(parseDatoContentToMjml);
  }

  if (value.type === "span") {
    const marks = value.marks || [];
    if (marks) {
      return marks.reduce((acc: any, mark: any) => {
        if (mark === "strong") {
          return `<strong>${acc}</strong>`;
        }
        if (mark === "bold") {
          return `<bold>${acc}</bold>`;
        }
        if (mark === "italic") {
          return `<em>${acc}</em>`;
        }
        if (mark === "underline") {
          return `<u>${acc}</u>`;
        }
        return acc;
      }, `${value.value}`);
    }
    return `${value.value}`;
  }

  if (value.type === "thematicBreak") {
    return `<mj-divider border-color="${theme.colors.neutral.x200}" border-width="1px" border-style="solid" />`;
  }

  return "";
}
