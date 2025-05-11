import type { IAttributeData } from "vscode-html-languageservice";
import { attributes } from "./attributes";
import { attribute, type } from "./utils";
import htmlData from "@vscode/web-custom-data/data/browsers.html-data.json";

const CoreAttributes = [
  attribute(
    "id",
    "Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).",
  ),
  attribute(
    "lang",
    "Participates in defining the language of the element, the language that non-editable elements are written in or the language that editable elements should be written in.",
  ),
  attribute(
    "tabindex",
    "An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position.",
  ),
];
const StylingAttributes = [
  attribute(
    "class",
    "Assigns a class name or set of class names to an element. It functions identically to the class attribute in HTML.",
  ),
  attribute(
    "style",
    "It specifies style information for its element. It functions identically to the style attribute in HTML.",
  ),
];
const ConditionalProcessingAttributes = [
  attribute(
    "systemLanguage",
    "represents a list of supported language tags. This list is matched against the language defined in the user preferences.",
  ),
];
const PresentationAttributes = [
  attribute(
    "transform",
    `The transform attribute defines a list of transform definitions that are applied to an element and the element's children. The items in the transform list are separated by whitespace and/or commas, and are applied from right to left.`,
  ),
  attribute(
    "alignment-baseline",
    "The alignment-baseline attribute specifies how an object is aligned with respect to its parent. This property specifies which baseline of this element is to be aligned with the corresponding baseline of the parent. For example, this allows alphabetic baselines in Roman text to stay aligned across font size changes. It defaults to the baseline with the same name as the computed value of the alignment-baseline property.",
    [
      "auto",
      "baseline",
      "before-edge",
      "text-before-edge",
      "middle",
      "central",
      "after-edge",
      "text-after-edge",
      "ideographic",
      "alphabetic",
      "hanging",
      "mathematical",
      "inherit",
    ],
  ),
  attribute(
    "baseline-shift",
    "The baseline-shift attribute allows repositioning of the dominant-baseline relative to the dominant-baseline of the parent text content element. The shifted object might be a sub- or superscript.",
    // ["auto", "baseline", "super", "sub", "inherit"], includes numbers
  ),
  attribute(
    "clip-path",
    "The clip-path attribute binds the element it is applied to with a given <clipPath> element",
    // ["none", "inherit"],
  ),
  attribute(
    "clip-rule",
    "The clip-rule attribute only applies to graphics elements that are contained within a <clipPath> element. The clip-rule attribute basically works as the fill-rule attribute, except that it applies to <clipPath> definitions.",
    ["nonzero", "evenodd", "inherit"],
  ),
  attribute(
    "color",
    "The color attribute is used to provide a potential indirect value (currentColor) for the fill, stroke, stop-color, flood-color and lighting-color attributes.",
    // ["inherit"],
  ),
  attribute(
    "color-interpolation",
    "The color-interpolation attribute specifies the color space for gradient interpolations, color animations, and alpha compositing.",
    ["auto", "sRGB", "linearRGB", "inherit"],
  ),
  attribute(
    "color-interpolation-filters",
    "The color-interpolation-filters attribute specifies the color space for imaging operations performed via filter effects.",
    ["auto", "sRGB", "linearRGB", "inherit"],
  ),
  attribute(
    "color-profile",
    "The color-profile attribute is used to define which color profile a raster image included through the <image> element should use.",
    ["auto", "sRGB", "inherit"],
  ),
  attribute(
    "color-rendering",
    "The color-rendering attribute provides a hint to the SVG user agent about how to optimize its color interpolation and compositing operations.",
    ["auto", "optimizeSpeed", "optimizeQuality", "inherit"],
  ),
  attribute(
    "cursor",
    "The cursor attribute specifies the mouse cursor displayed when the mouse pointer is over an element.",
    [
      "auto",
      "crosshair",
      "default",
      "pointer",
      "move",
      "e-resize",
      "ne-resize",
      "nw-resize",
      "n-resize",
      "se-resize",
      "sw-resize",
      "s-resize",
      "w-resize| text",
      "wait",
      "help",
      "inherit",
    ],
  ),
  attribute(
    "direction",
    `The direction attribute specifies the base writing direction of text and the direction of embeddings and overrides (see unicode-bidi) for the Unicode bidirectional algorithm. For the direction attribute to have any effect on an element that does not by itself establish a new text chunk (such as a <tspan> element without absolute position adjustments due to x or y attributes), the unicode-bidi property's value must be embed or bidi-override.`,
    ["ltr", "rtl", "inherit"],
  ),
  attribute(
    "display",
    "The display attribute lets you control the rendering of graphical or container elements.",
    [
      "inline",
      "block",
      "list-item",
      "run-in",
      "compact",
      "marker",
      "table",
      "inline-table",
      "table-row-group",
      "table-header-group",
      "table-footer-group",
      "table-row",
      "table-column-group",
      "table-column",
      "table-cell",
      "table-caption",
      "none",
      "inherit",
    ],
  ),
  attribute(
    "dominant-baseline",
    "The dominant-baseline attribute is used to determine or re-determine a scaled-baseline-table. A scaled-baseline-table is a compound value with three components: a baseline-identifier for the dominant-baseline, a baseline-table and a baseline-table font-size. Some values of the property re-determine all three values; other only re-establish the baseline-table font-size. When the initial value, auto, would give an undesired result, this property can be used to explicitly set the desire scaled-baseline-table.",
    [
      "auto",
      "text-bottom",
      "alphabetic",
      "ideographic",
      "middle",
      "central",
      "mathematical",
      "hanging",
      "text-top",
    ],
  ),
  attribute(
    "fill",
    `The fill attribute has two meanings based on the context it's used.`,
    // ["remove", "freeze"],
  ),
  attribute(
    "fill-opacity",
    "This attribute specifies the opacity of the color or the content the current object is filled with.",
    // ["inherit"],
  ),
  attribute(
    "fill-rule",
    `The fill-rule attribute indicates how to determine what side of a path is inside a shape, to determine how the fill property paints the shape. For a simple, non-intersecting path, it is intuitively clear what region lies "inside"; however, for a more complex path, such as a path that intersects itself or where one subpath encloses another, the interpretation of "inside" is not so obvious.`,
    ["nonzero", "evenodd", "inherit"],
  ),
  attribute(
    "filter",
    "The filter attribute defines the filter effects define by the <filter> element that shall be applied to its element.",
    // ["none", "inherit"],
  ),
  attribute(
    "flood-color",
    "The flood-color attribute indicates what color to use to flood the current filter primitive subregion defined through the <feflood> element. The keyword currentColor and ICC colors can be specified in the same manner as within a <paint> specification for the fill and stroke attributes.",
    // ["currentColor", "inherit"],
  ),
  attribute(
    "flood-opacity",
    "The flood-opacity attribute indicates the opacity value to use across the current filter primitive subregion defined through the <feflood> element.",
    // ["inherit"],
  ),
  attribute(
    "font-family",
    "The font-family attribute indicates which font family will be used to render the text, specified as a prioritized list of font family names and/or generic family names.",
    // ["inherit"],
  ),
  attribute(
    "font-size",
    "The font-size attribute refers to the size of the font from baseline to baseline when multiple lines of text are set solid in a multiline layout environment. For SVG, if a <length> is provided without a unit identifier (e.g., an unqualified number such as 128), the browser processes the <length> as a height value in the current user coordinate system.",
    // ["inherit"],
  ),
  attribute(
    "font-size-adjust",
    "The font-size-adjust attribute allows authors to specify an aspect value for an element that will preserve the x-height of the first choice font in a substitute font.",
    // ["none", "inherit"],
  ),
  attribute(
    "font-stretch",
    "The font-stretch attribute indicates the desired amount of condensing or expansion in the glyphs used to render the text.",
    [
      "normal",
      "wider",
      "narrower",
      "ultra-condensed",
      "extra-condensed",
      "condensed",
      "semi-condensed",
      "semi-expanded",
      "expanded",
      "extra-expanded",
      "ultra-expanded",
      "inherit",
    ],
  ),
  attribute(
    "font-style",
    "The font-style attribute specifies whether the text is to be rendered using a normal, italic or oblique face.",
    // ["normal", "italic", "oblique", "inherit"],
  ),
  attribute(
    "font-variant",
    "The font-variant attribute indicates whether the text is to be rendered using the normal glyphs for lowercase characters or using small-caps glyphs for lowercase characters.",
    // ["normal", "small-caps", "inherit"],
  ),
  attribute(
    "font-weight",
    "The font-weight attribute refers to the boldness or lightness of the glyphs used to render the text, relative to other fonts in the same font family.",
    [
      "normal",
      "bold",
      "bolder",
      "lighter",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "inherit",
    ],
  ),
  attribute(
    "image-rendering",
    "The image-rendering attribute provides a hint to the browser about how to make speed vs. quality tradeoffs as it performs image processing.",
    ["auto", "optimizeSpeed", "optimizeQuality"],
  ),
  attribute(
    "kerning",
    "The kerning attribute indicates whether the browser should adjust inter-glyph spacing based on kerning tables that are included in the relevant font (i.e., enable auto-kerning) or instead disable auto-kerning and instead set inter-character spacing to a specific length (typically, zero).",
    // ["auto", "inherit"],
  ),
  attribute(
    "letter-spacing",
    "The letter-spacing attribute specifies spacing behavior between text characters supplemental to any spacing due to the kerning attribute.",
    // ["normal", "inherit"],
  ),
  attribute(
    "lighting-color",
    "The lighting-color attribute defines the color of the light source for filter primitives elements <fediffuselighting> and <fespecularlighting>.",
    // ["currentColor", "inherit"],
  ),
  attribute(
    "marker-end",
    "The marker-end defines the arrowhead or polymarker that will be drawn at the final vertex of the given <path> element or basic shape. Note that for a <path> element which ends with a closed sub-path, the last vertex is the same as the initial vertex on the given sub-path. In this case, if marker-end does not equal none, then it is possible that two markers will be rendered on the given vertex. One way to prevent this is to set marker-end to none. (Note that the same comment applies to <polygon> elements.)",
    // ["none", "inherit"],
  ),
  attribute(
    "marker-mid",
    "The marker-mid defines the arrowhead or polymarker that shall be drawn at every vertex other than the first and last vertex of the given <path> element or basic shape.",
    // ["none", "inherit"],
  ),
  attribute(
    "marker-start",
    "The marker-start attribute defines the arrowhead or polymarker that will be drawn at the first vertex of the given <path> element or basic shape.",
    // ["none", "inherit"],
  ),
  attribute(
    "mask",
    "The mask attribute binds the element it is applied to with a given <mask> element.",
    // ["none", "inherit"],
  ),
  attribute(
    "opacity",
    "The opacity attribute specifies the transparency of an object or of a group of objects, that is, the degree to which the background behind the element is overlaid.",
    // ["inherit"],
  ),
  attribute(
    "overflow",
    "The overflow attribute has the same parameter values as defined for the css overflow property.",
    ["visible", "hidden", "scroll", "auto"],
  ),
  attribute(
    "pointer-events",
    `The pointer-events attribute allows authors to control whether or when an element may be the target of a mouse event. This attribute is used to specify under which circumstance (if any) a mouse event should go "through" an element and target whatever is "underneath" that element instead.`,
    [
      "visiblePainted",
      "visibleFill",
      "visibleStroke",
      "visible",
      "painted",
      "fill",
      "stroke",
      "all",
      "none",
      "inherit",
    ],
  ),
  attribute(
    "shape-rendering",
    "The creator of SVG content might want to provide a hint about what tradeoffs to make as the browser renders <path> element or basic shapes. The shape-rendering attribute provides these hints.",
    ["auto", "optimizeSpeed", "crispEdges", "geometricPrecision"],
  ),
  attribute(
    "stop-color",
    "The stop-color attribute indicates what color to use at that gradient stop. The keyword currentColor and ICC colors can be specified in the same manner as within a <paint> specification for the fill and stroke attributes.",
    // ["currentColor", "inherit"],
  ),
  attribute(
    "stop-opacity",
    "The stop-opacity attribute defines the opacity of a given gradient stop.",
    // ["inherit"],
  ),
  attribute(
    "stroke",
    "The stroke attribute defines the color of the outline on a given graphical element. The default value for the stroke attribute is none.",
  ),
  attribute(
    "stroke-dasharray",
    "the stroke-dasharray attribute controls the pattern of dashes and gaps used to stroke paths.",
    // ["none", "inherit"],
  ),
  attribute(
    "stroke-dashoffset",
    "the stroke-dashoffset attribute specifies the distance into the dash pattern to start the dash.",
    // ["inherit"],
  ),
  attribute(
    "stroke-linecap",
    "the stroke-linecap attribute specifies the shape to be used at the end of open subpaths when they are stroked.",
    ["butt", "round", "square"],
  ),
  attribute(
    "stroke-linejoin",
    "the stroke-linejoin attribute specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
    ["miter", "round", "bevel", "miter-clip", "round"],
  ),
  attribute(
    "stroke-miterlimit",
    "When two line segments meet at a sharp angle and miter joins have been specified for stroke-linejoin, it is possible for the miter to extend far beyond the thickness of the line stroking the path. The stroke-miterlimit imposes a limit on the ratio of the miter length to the stroke-width. When the limit is exceeded, the join is converted from a miter to a bevel.",
    // ["inherit"],
  ),
  attribute(
    "stroke-opacity",
    "the stroke-opacity attribute specifies the opacity of the outline on the current object. Its default value is 1.",
    // ["inherit"],
  ),
  attribute(
    "stroke-width",
    "the stroke-width attribute specifies the width of the outline on the current object. Its default value is 1. If a <percentage> is used, the value represents a percentage of the current viewport. If a value of 0 is used the outline will never be drawn.",
    // ["inherit"],
  ),
  attribute(
    "text-anchor",
    "The text-anchor attribute is used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
    ["start", "middle", "end"],
  ),
  attribute(
    "text-decoration",
    `The text-decoration attribute works exactly like the css text decoration property except that it's an attribute. See css text decoration for further information.`,
    ["none", "underline", "overline", "line-through", "blink", "inherit"],
  ),
  attribute(
    "text-rendering",
    "The creator of SVG content might want to provide a hint about what tradeoffs to make as the browser renders text. The text-rendering attribute provides these hints.",
    [
      "auto",
      "optimizeSpeed",
      "optimizeLegibility",
      "geometricPrecision",
      "inherit",
    ],
  ),
  attribute(
    "vector-effect",
    "The vector-effect property specifies the vector effect to use when drawing an object. Vector effects are applied before any of the other compositing operations, i.e. filters, masks and clips.",
    [
      "none",
      "non-scaling-stroke",
      "non-scaling-size",
      "non-rotation",
      "fixed-position",
    ],
  ),
  attribute(
    "visibility",
    "Depending on the value of attribute pointer-events, graphics elements which have their visibility attribute set to hidden still might receive events.",
    ["visible", "hidden", "collapse", "inherit"],
  ),
  attribute(
    "word-spacing",
    "The word-spacing attribute specifies spacing behavior between words.",
    // ["normal", "inherit"],
  ),
  attribute(
    "writing-mode",
    "The writing-mode attribute specifies whether the initial inline-progression-direction for a <text> element shall be left-to-right, right-to-left, or top-to-bottom. The writing-mode attribute applies only to <text> elements; the attribute is ignored for <tspan>, <tref>, <altGlyph> and <textPath> sub-elements. (Note that the inline-progression-direction can change within a <text> element due to the Unicode bidirectional algorithm and properties direction and unicode-bidi.",
    ["lr-tb", "rl-tb", "tb-rl", "lr", "rl", "tb", "inherit"],
  ),
];

const FilterPrimitiveAttributes = [
  attribute(
    "height",
    `This attribute indicates a vertical length in the user coordinate system. The exact effect of this coordinate depends on each element. Most of the time, it represents the height of the rectangular region of the reference element (see each individual element's documentation for exceptions).`,
  ),
  attribute(
    "width",
    `This attribute indicates an horizontal length in the user coordinate system. The exact effect of this coordinate depends on each element. Most of the time, it represents the width of the rectangular region of the reference element (see each individual element's documentation for exceptions).`,
  ),
  attributes.x,
  attributes.y,
  attributes.result,
];
const TransferFunctionAttributes = [
  type(["identity", "table", "discrete", "linear", "gamma"]),
  attribute(
    "tableValues",
    "Defines a list of numbers defining a lookup table of values for a color component transfer function.",
  ),
  attribute(
    "intercept",
    "Defines the intercept of the linear function of color component transfers when the type attribute is set to linear.",
  ),
  attribute(
    "amplitude",
    "Controls the amplitude of the gamma function of a component transfer element when its type attribute is gamma.",
  ),
  attribute("exponent", "Defines the exponent of the gamma function."),
];

const AnimationTargetElementAttributes = [
  attribute(
    "href",
    "This attribute indicates the name of the attribute in the parent element that is going to be changed during an animation.",
  ),
];
const AnimationAttributeTargetAttributes = [
  attribute(
    "attributeName",
    "This attribute indicates the name of the attribute in the parent element that is going to be changed during an animation. ",
  ),
  attribute(
    "attributeType",
    "This attribute specifies the namespace in which the target attribute and its associated values are defined. ",
    ["CSS", "XML", "auto"],
  ),
];
const AnimationTimingAttributes = [
  attribute(
    "dur",
    "This attribute indicates the simple duration of the animation.",
    // ["indefinite","media"],
  ),
  attribute(
    "repeatCount",
    "This attribute indicates the number of time the animation will take place.",
    // ["indefinite","media"],
  ),
  attributes.begin,
  attribute(
    "end",
    "This attribute defines an end value for the animation that can constrain the active duration.",
  ),
  attribute(
    "min",
    "This attribute specifies the minimum value of the active duration.",
  ),
  attribute(
    "max",
    "This attribute specifies the maximum value of the active duration. ",
  ),
  attribute(
    "restart",
    "This attribute indicates when animation can or can not restart.",
    ["always", "whenNotActive", "never"],
  ),
  attribute(
    "repeatDur",
    "This attribute specifies the total duration for repeat.",
    ["indefinite"],
  ),
  attribute(
    "fill",
    `The fill attribute has two meanings based on the context it's used.`,
    // ["remove", "freeze"],
  ),
];

const AnimationValueAttributes = [
  attributes.from,
  attributes.to,
  attributes.by,
  attribute(
    "calcMode",
    "This attribute specifies the interpolation mode for the animation. The default mode is linear, however if the attribute does not support linear interpolation (e.g. for strings), the calcMode attribute is ignored and discrete interpolation is used.",
    ["discrete", "linear", "paced", "spline"],
  ),
  attribute(
    "keyTimes",
    "The keyTimes attribute is a semicolon-separated list of time values used to control the pacing of the animation. Each time in the list corresponds to a value in the values attribute list, and defines when the value is used in the animation. Each time value in the keyTimes list is specified as a floating point value between 0 and 1 (inclusive), representing a proportional offset into the duration of the animation element.",
  ),
  attribute(
    "keySplines",
    `The keySplines attribute define a set of Bézier control points associated with the keyTimes list, defining a cubic Bézier function that controls interval pacing. The attribute value is a semicolon-separated list of control point descriptions. Each control point description is a set of four values: x1 y1 x2 y2, describing the Bézier control points for one time segment. The keyTimes values that define the associated segment are the Bézier "anchor points", and the keySplines values are the control points. Thus, there must be one fewer sets of control points than there are keyTimes.`,
  ),
  attribute(
    "values",
    `Has different meanings, depending upon the context where it's used, either it defines a sequence of values used over the course of an animation, or it's a list of numbers for a color matrix, which is interpreted differently depending on the type of color change to be performed.`,
  ),
];
const AnimationAdditionAttributes = [
  attribute(
    "additive",
    "This attribute controls whether or not the animation is additive.",
    ["replace", "sum"],
  ),
  attribute(
    "accumulate",
    "This attribute controls whether or not the animation is cumulative.",
    ["none", "sum"],
  ),
];
const AriaAttributes = htmlData.globalAttributes.filter(
  (x) => x.name.startsWith("aria") || x.name === "role",
) as unknown as IAttributeData[];
const SVGEvents = htmlData.globalAttributes.filter((x) =>
  x.name.startsWith("on"),
) as unknown as IAttributeData[];
export const GenericAttributes = [
  ...CoreAttributes,
  ...StylingAttributes,
  ...ConditionalProcessingAttributes,
  ...SVGEvents,
];
export const attributeSets = {
  // CoreAttributes,
  // StylingAttributes,
  // GenericAttributes,
  PresentationAttributes,
  FilterPrimitiveAttributes,
  TransferFunctionAttributes,
  // FilterAttributes: [
  //   ...FilterPrimitiveAttributes,
  //   ...TransferFunctionAttributes,
  // ],
  AnimationTargetElementAttributes,
  AnimationAttributeTargetAttributes,
  AnimationTimingAttributes,
  AnimationValueAttributes,
  AnimationAdditionAttributes,
  // AnimationAttributes: [
  //   ...AnimationTargetElementAttributes,
  //   ...AnimationAttributeTargetAttributes,
  //   ...AnimationTimingAttributes,
  //   ...AnimationValueAttributes,
  //   ...AnimationAdditionAttributes,
  // ],
  AriaAttributes,
} satisfies Record<string, IAttributeData[]>;
