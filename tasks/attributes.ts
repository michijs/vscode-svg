import { attribute } from "./utils";

export const attributes = {
  href: attribute("href", "The URL or URL fragment the hyperlink points to."),
  offset: attribute("offset", "This attribute defines where the gradient stop is placed along the gradient vector."),
  title: attribute("title", "This attribute is the title of the style sheet which can be used to switch between alternate style sheets."),
  systemLanguage: attribute(
    "systemLanguage",
    "Represents a list of supported language tags. This list is matched against the language defined in the user preferences.",
  ),
  crossorigin: attribute(
    "crossorigin",
    `provides support for CORS, defining how the element handles crossorigin requests, thereby enabling the configuration of the CORS requests for the element's fetched data. It is a CORS settings attribute.`,
    "xo",
  ),
  pathLength: attribute(
    "pathLength",
    `This attribute lets the author specify a total length for the path, in whatever units the author chooses. This value is then used to calibrate the browser's distance calculations with those of the author, by scaling all distance computations using the ratio pathLength / (computed value of path length).`,
  ),
  cx: attribute(
    "cx",
    `For the <circle> and the <ellipse> element, this attribute define the x-axis coordinate of the center of the element. If the attribute is not specified, the effect is as if a value of "0" were specified.`,
  ),
  cy: attribute(
    "cy",
    `For the <circle> and the <ellipse> element, this attribute define the y-axis coordinate of the center of the element. If the attribute is not specified, the effect is as if a value of "0" were specified.`,
  ),
  rx: attribute("rx", "The radius of the ellipse on the x axis."),
  ry: attribute(
    "ry",
    "For the <circle> and the <ellipse> element, The radius of the ellipse on the y axis.",
  ),
  in: attribute(
    "in",
    "The in attribute identifies input for the given filter primitive.",
    [
      "SourceGraphic",
      "SourceAlpha",
      "BackgroundImage",
      "BackgroundAlpha",
      "FillPaint",
      "StrokePaint",
    ],
  ),
  in2: attribute(
    "in2",
    "The in2 attribute identifies the second input for the given filter primitive. It works exactly like the in attribute.",
    [
      "SourceGraphic",
      "SourceAlpha",
      "BackgroundImage",
      "BackgroundAlpha",
      "FillPaint",
      "StrokePaint",
    ],
  ),
  mode: attribute(
    "mode",
    "The mode attribute defines the blending mode on the <feblend> filter primitive.",
    ["normal", "multiply", "screen", "darken", "lighten"],
  ),
  operator: attribute(
    "operator",
    `The operator attribute as two meaning based on the context it's used.`,
    ["over", "in", "out", "atop", "xor", "arithmetic"],
  ),
  begin: attribute(
    "begin",
    "Defines when an animation should begin or when an element should be discarded.",
  ),
  by: attribute(
    "by",
    "specifies a relative offset value for an attribute that will be modified during an animation.",
  ),
  from: attribute(
    "from",
    "This attribute indicates the initial value of the attribute that will be modified during the animation. When used with the to attribute, the animation will change the modified attribute from the from value to the to value.",
  ),
  to: attribute(
    "to",
    "This attribute indicates the final value of the attribute that will be modified during the animation. The value of the attribute will change between the from attribute value and this value. By default the change will be linear.",
  ),
  kernelUnitLength: attribute(
    "kernelUnitLength",
    `The kernelUnitLength attribute has two meaning based on the context it's used.`,
  ),
  stdDeviation: attribute(
    "stdDeviation",
    "The stdDeviation attribute defines the standard deviation for the blur operation. If two <number>s are provided, the first number represents a standard deviation value along the x-axis. The second value represents a standard deviation along the y-axis. If one number is provided, then that value is used for both X and Y.",
  ),
  dx: attribute(
    "dx",
    "The dx attribute indicates a shift along the x-axis on the position of an element or its content. What exactly is shifted depends on the element for which this attribute is set.",
  ),
  dy: attribute(
    "dy",
    "The dy attribute indicates a shift along the y-axis on the position of an element or its content. What exactly is shifted depends on the element for which this attribute is set.",
  ),
  surfaceScale: attribute(
    "surfaceScale",
    "The surfaceScale attribute represent the height of the surface for a light filter primitive. If the attribute is not specified, then the effect is as if a value of 1 were specified.",
  ),
  edgeMode: attribute(
    "edgeMode",
    "The edgeMode attribute determines how to extend the input image as necessary with color values so that the matrix operations can be applied when the kernel is positioned at or near the edge of the input image.",
    ["duplicate", "wrap", "none"],
  ),
  preserveAspectRatio: attribute(
    "preserveAspectRatio",
    "In some cases, typically when using the viewBox attribute, it is desirable that the graphics stretch to fit non-uniformly to take up the entire viewport. In other cases, it is desirable that uniform scaling be used for the purposes of preserving the aspect ratio of the graphics.",
    [
      "none",
      ...(() => {
        const amount = ["Min", "Mid", "Max"];
        const meetOrSlice = ["meet", "slice"];
        const arrayWithX = new Array<string>();
        amount.forEach((y) => {
          arrayWithX.push(`x${y}`);
        });
        const arrayWithXAndY = new Array<string>();
        arrayWithX.forEach((x) => {
          amount.forEach((y) => {
            arrayWithXAndY.push(`${x}Y${y}`);
          });
        });
        const finalArray = new Array<string>();
        arrayWithXAndY.forEach((x) => {
          meetOrSlice.forEach((y) => {
            finalArray.push(`${x} ${y}`);
          });
        });
        return finalArray;
      })(),
    ],
  ),
  result: attribute(
    "result",
    "The result attribute defines the assigned name for this filter primitive. If supplied, then graphics that result from processing this filter primitive can be referenced by an in attribute on a subsequent filter primitive within the same <filter> element. If no value is provided, the output will only be available for re-use as the implicit input into the next filter primitive if that filter primitive provides no value for its in attribute.",
    [
      "none",
      "xMinYMin",
      "xMidYMin",
      "xMaxYMin",
      "xMinYMid",
      "xMidYMid",
      "xMaxYMid",
      "xMinYMax",
      "xMidYMax",
      "xMaxYMax",
    ].reduce((previousValue, currentValue) => {
      return previousValue.concat(
        `${currentValue} meet`,
        `${currentValue} slice`,
      );
    }, new Array<string>()),
  ),
  rotate: attribute(
    "rotate",
    "defines a rotation applied to the element animated along a path, usually to make it pointing in the direction of the animation.",
  ),
  x: attribute(
    "x",
    `This attribute indicates an x-axis coordinate in the user coordinate system. The exact effect of this coordinate depend on each element. Most of the time, it represent the x-axis coordinate of the upper-left corner of the rectangular region of the reference element (see each individual element's documentation for exceptions).Its syntax is the same as that for <length>`,
  ),
  y: attribute(
    "y",
    `This attribute indicates an y-axis coordinate in the user coordinate system. The exact effect of this coordinate depend on each element. Most of the time, it represent the x-axis coordinate of the upper-left corner of the rectangular region of the reference element (see each individual element's documentation for exceptions).Its syntax is the same as that for <length>`,
  ),
  z: attribute(
    "z",
    "The z attribute difine the location along the Z-axis for a light source in the coordinate system established by the primitiveUnits attribute on the <filter> element, assuming that, in the initial coordinate system, the positive Z-axis comes out towards the person viewing the content and assuming that one unit along the Z-axis equals on unit in X and Z.",
  ),
  specularConstant: attribute(
    "specularConstant",
    "The specularConstant attribute represents the ks value in the Phong lighting model. In SVG, this can be any non-negative number.",
  ),
  specularExponent: attribute(
    "specularExponent",
    `The specularExponent attribute controls the focus for the light source, a larger value indicate a more "shiny" light.`,
  ),
  height: attribute(
    "height",
    `This attribute indicates a vertical length in the user coordinate system. The exact effect of this coordinate depends on each element. Most of the time, it represents the height of the rectangular region of the reference element (see each individual element's documentation for exceptions).`,
  ),
  width: attribute(
    "width",
    `This attribute indicates an horizontal length in the user coordinate system. The exact effect of this coordinate depends on each element. Most of the time, it represents the width of the rectangular region of the reference element (see each individual element's documentation for exceptions).`,
  ),
  x1: attribute("x1", "Define the 1 x-axis coordinate"),
  x2: attribute("x2", "Define the 2 x-axis coordinate"),
  y1: attribute("y1", "Define the 1 y-axis coordinate"),
  y2: attribute("y2", "Define the 2 y-axis coordinate"),
  refX: attribute(
    "refX",
    "Defines the x coordinate for the reference point of the marker.",
  ),
  refY: attribute(
    "refY",
    "Defines the y coordinate for the reference point of the marker.",
  ),
  viewBox: attribute(
    "viewBox",
    "The viewBox attribute allows you to specify that a given set of graphics stretch to fit a particular container element.",
  ),
  points: attribute(
    "points",
    "The points attribute define a list of points required to draw a  <polyline> or <polygon> element.",
  ),
  orient: attribute(
    "orient",
    "Indicates how a marker is rotated when it is placed at its position on the shape.",
  ),
  gradientUnits: attribute(
    "gradientUnits",
    "The gradientUnits attribute defines the coordinate system for attributes x1, y1, x2 and y2 on the <lineargradient> element or for attributes cx, cy, r, fx, and fy on the <radialgradient>.",
    ["userSpaceOnUse", "objectBoundingBox"],
  ),
  gradientTransform: attribute(
    "gradientTransform",
    "The gradientTransform attribute contains the definition of an optional additional transformation from the gradient coordinate system onto the target coordinate system (i.e., userSpaceOnUse or objectBoundingBox). This allows for things such as skewing the gradient. This additional transformation matrix is post-multiplied to (i.e., inserted to the right of) any previously defined transformations, including the implicit transformation necessary to convert from object bounding box units to user space.",
  ),
  spreadMethod: attribute(
    "spreadMethod",
    "The spreadMethod attribute determines how a shape is filled beyond the defined edges of a gradient.",
    ["pad", "reflect", "repeat"],
  ),
  lengthAdjust: attribute(
    "lengthAdjust",
    "How the text is stretched or compressed to fit the width defined by the textLength attribute.",
    ["spacing", "spacingAndGlyphs"],
  ),
  method: attribute(
    "method",
    "Which method to render individual glyphs along the path.",
    ["alignt", "stretch"],
  ),
  spacing: attribute("spacing", "How space between glyphs should be handled.", [
    "auto",
    "exact",
  ]),
  startOffset: attribute(
    "startOffset",
    "How far the beginning of the text should be offset from the beginning of the path.",
  ),
  textLength: attribute(
    "textLength",
    "A width that the text should be scaled to fit.",
  ),
  r: attribute(
    "r",
    `For the <circle> this attribute defines the radius of the element. A value of zero disables rendering of the circle.

  For the <radialgradient> element, this attribute defines the radius of the largest (i.e., outermost) circle for the radial gradient. The gradient will be drawn such that the 100% gradient stop is mapped to the perimeter of this largest (i.e., outermost) circle. A value of zero will cause the area to be painted as a single color using the color and opacity of the last gradient <stop>. If the attribute is not specified, the effect is as if a value of 50% were specified.`,
  ),
};
