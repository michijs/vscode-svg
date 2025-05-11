import bcd, {
  type CompatStatement,
  type SupportBlock,
  type SupportStatement,
} from "@mdn/browser-compat-data";
// @ts-ignore
import { getStatus } from "compute-baseline";
import type { ITagData } from "vscode-html-languageservice";

const namespace = "svg";
export const featureBcd = bcd[namespace];
export const bcdElements = featureBcd.elements;
const baseMDN = `https://developer.mozilla.org/en-US/docs/Web/${namespace.toUpperCase()}`;
const elementsMDN = `${baseMDN}/Element`;
const attributesMDN = `${baseMDN}/Attribute`;

function getFeatureId(compat?: CompatStatement) {
  return compat?.tags
    ?.find((tag) => {
      const parts = tag.split(":");
      return parts.length == 2 && parts[0] == "web-features";
    })
    ?.split(":")[1];
}

const BaselineBrowserAbbreviations = {
  chrome: "C",
  chrome_android: "CA",
  edge: "E",
  firefox: "FF",
  firefox_android: "FFA",
  safari: "S",
  safari_ios: "SM",
};

function getBrowserCompatString(support: SupportBlock) {
  if (!support) {
    return;
  }
  return Object.entries(support).map(([browser, version_added]) => {
    const abbreviation = BaselineBrowserAbbreviations[browser];
    return supportToShortCompatString({ version_added }, abbreviation);
  });
}

function supportToShortCompatString(
  support: { version_added: SupportStatement },
  browserAbbrev: string,
): string {
  let version_added;
  if (Array.isArray(support) && support[0] && support[0].version_added) {
    version_added = support[0].version_added;
  } else if (support.version_added) {
    version_added = support.version_added;
  }

  if (version_added) {
    if (typeof version_added === "boolean") {
      return browserAbbrev;
    } else {
      return `${browserAbbrev}${version_added}`;
    }
  }

  return "";
}

const mdnReference = (url?: string) =>
  url
    ? [
        {
          name: "MDN Reference",
          url,
        },
      ]
    : undefined;

export const addCompatData = (t: ITagData) => {
  if (t.description) {
    t.description = {
      kind: "markdown",
      value: t.description as string,
    };
  }

  const bcdMatchingTag = bcdElements[t.name];
  t.references = mdnReference(
    bcdMatchingTag.__compat?.mdn_url ?? `${elementsMDN}/${t.name}`,
  );

  // Add the Baseline status to the HTML element
  const featureId = getFeatureId(bcdMatchingTag.__compat);
  if (!featureId) {
    return;
  }
  const status = getStatus(featureId, `${namespace}.elements.${t.name}`);
  if (!status) {
    return;
  }
  t.browsers = getBrowserCompatString(status.support) as string[] | undefined;
  // @ts-ignore
  delete status.support;
  t.status = status;

  // Add the Baseline status to each attribute
  t.attributes.forEach((a) => {
    let attributeNamespace = `elements.${t.name}`;
    let bcdMatchingAttr = bcdElements[t.name][a.name];
    if (!bcdMatchingAttr) {
      attributeNamespace = "global_attributes";
      bcdMatchingAttr =
        featureBcd.global_attributes[a.name] ??
        bcd.html.global_attributes[a.name];
    }
    a.references =
      a.references ??
      mdnReference(
        bcdMatchingAttr?.__compat?.mdn_url ?? `${attributesMDN}/${a.name}`,
      );

    if (!bcdMatchingAttr) return;
    const attrFeatureId = getFeatureId(bcdMatchingAttr.__compat) || featureId;
    const attrStatus = getStatus(
      attrFeatureId,
      `${namespace}.${attributeNamespace}.${a.name}`,
    );
    if (!attrStatus) {
      return;
    }
    a.browsers = getBrowserCompatString(attrStatus.support);

    const { support, ...status } = attrStatus;
    a.status = status;
  });
  lookForMissingAttributes(t);
};

export const lookForMissingTags = (tags: ITagData[]) => {
  console.log(
    Object.keys(bcdElements).filter((x) => !tags.find((y) => y.name === x)),
  );
};

export const lookForMissingAttributes = (t: ITagData) => {
  const missingAttrs = Object.keys(bcdElements[t.name]).filter(
    (x) =>
      !t.attributes.find((y) => y.name === x) &&
      x !== "__compat" &&
      !bcdElements[t.name][x].deprecated &&
      !bcdElements[t.name][x].experimental,
  );
  if (missingAttrs.length > 0) {
    console.log(`${t.name} Missing attributes ${JSON.stringify(missingAttrs)}`);
  }
};
