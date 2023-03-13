import { IValueSet } from "vscode-html-languageservice";
import { valueSet } from "./utils";

export const valueSets: IValueSet[] = [
  valueSet("referrerpoliciy", [
    "no-referrer",
    "no-referrer-when-downgrade",
    "origin",
    "origin-when-cross-origin",
    "same-origin",
    "strict-origin",
    "strict-origin-when-cross-origin",
    "unsafe-url",
  ]),
  valueSet("xo", ["anonymous", "use-credentials"]),
];
