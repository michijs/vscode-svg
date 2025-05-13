import type { IAttributeData, ITagData } from "vscode-html-languageservice";

export const attribute = (
  name: string,
  description: string,
  values?: string[] | string,
): IAttributeData => ({
  name,
  description,
  values: Array.isArray(values)
    ? values?.map((x) => ({
        name: x,
      }))
    : undefined,
  valueSet: !Array.isArray(values) ? values : undefined,
});
export const element = (
  name: string,
  description,
  attributes: IAttributeData[] = [],
): ITagData => ({
  name,
  description,
  attributes,
});

export const valueSet = (name: string, values: string[]) => ({
  name,
  values: values.map((x) => ({
    name: x,
  })),
});

export const type = (values?: string[]) =>
  attribute(
    "type",
    `Is a generic attribute and it has different meaning based on the context in which it's used.`,
    values,
  );
