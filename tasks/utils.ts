import type { IAttributeData } from "vscode-html-languageservice";

const mdnReference = (url?: string) =>
  url
    ? [
        {
          name: "MDN Reference",
          url,
        },
      ]
    : undefined;
export const attribute = (
  name: string,
  description: string,
  values?: string[] | string,
) => ({
  name,
  description,
  values: Array.isArray(values)
    ? values?.map((x) => ({
        name: x,
      }))
    : undefined,
  valueSet: !Array.isArray(values) ? values : undefined,
  references: mdnReference(
    `https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/${name}`,
  ),
});
export const element = (
  name: string,
  description,
  attributes: IAttributeData[] = [],
) => ({
  name,
  description,
  attributes,
  references: mdnReference(
    `https://developer.mozilla.org/en-US/docs/Web/SVG/Element/${name}`,
  ),
});

export const valueSet = (name: string, values: string[]) => ({
  name,
  values: values.map((x) => ({
    name: x,
  })),
});

export const type = (values: string[]) =>
  attribute(
    "type",
    `Is a generic attribute and it has different meaning based on the context in which it's used.`,
    values,
  );
