import * as fs from "fs";
import { HTMLDataV1 } from "vscode-html-languageservice";
import { attributes } from "./attributes";
import { attributeSets, GenericAttributes } from "./attributeSets";
import { element, attribute } from "./utils";
import { valueSets } from "./valueSets";

const jsonData: HTMLDataV1 = {
  version: 1.1,
  tags: [
    element(
      "a",
      "The `<a>` SVG element creates a hyperlink to other web pages, files, locations in the same page, email addresses, or any other URL.",
      [
        attribute("href", "The URL or URL fragment the hyperlink points to."),
        attribute(
          "download",
          "Instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file.",
        ),
        attribute(
          "hreflang",
          "The human language of the URL or URL fragment that the hyperlink points to.",
        ),
        attribute(
          "referrerpolicy",
          "Which referrer to send when fetching the URL.",
          "referrerpoliciy",
        ),
        attribute(
          "rel",
          "The relationship of the target object to the link object.",
        ),
        attribute("target", "Where to display the linked URL.", "target"),
        attribute("type", "A MIME type for the linked URL."),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
        ...attributeSets.TransferFunctionAttributes,
      ],
    ),
    element(
      "animate",
      "Provides a way to animate an attribute of an element over time.",
      [
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.AnimationAttributeTargetAttributes,
        ...attributeSets.AnimationTimingAttributes,
        ...attributeSets.AnimationValueAttributes,
        ...attributeSets.AnimationAdditionAttributes,
      ],
    ),
    element(
      "animateMotion",
      "Provides a way to define how an element moves along a motion path.",
      [
        attribute(
          "keyPoints",
          "This attribute indicate, in the range [0,1], how far is the object along the path for each keyTimes associated values.",
        ),
        attribute(
          "path",
          "This attribute defines the path of the motion, using the same syntax as the d attribute.",
        ),
        attributes.rotate,
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.AnimationAttributeTargetAttributes,
        ...attributeSets.AnimationTimingAttributes,
        ...attributeSets.AnimationValueAttributes,
        ...attributeSets.AnimationAdditionAttributes,
      ],
    ),
    element(
      "animateTransform",
      "animates a transformation attribute on its target element, thereby allowing animations to control translation, scaling, rotation, and/or skewing.",
      [
        attributes.from,
        attributes.to,
        attributes.by,
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.AnimationAttributeTargetAttributes,
        ...attributeSets.AnimationTimingAttributes,
        ...attributeSets.AnimationValueAttributes,
        ...attributeSets.AnimationAdditionAttributes,
      ],
    ),
    element("circle", "Create circles based on a center point and a radius.", [
      attributes.cx,
      attributes.cy,
      attributes.pathLength,
      attributes.r,
      ...attributeSets.PresentationAttributes,
      ...attributeSets.AriaAttributes,
    ]),
    element(
      "clipPath",
      "Defines a clipping path. A clipping path is used/referenced using the clip-path property.",
      [
        attribute(
          "clipPathUnits",
          "Defines the coordinate system for the contents of the <clippath> element.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        ...attributeSets.PresentationAttributes,
      ],
    ),
    element(
      "defs",
      "Is used to store graphical objects that will be used at a later time.",
      attributeSets.PresentationAttributes,
    ),
    element(
      "desc",
      "Each container element or graphics element in an SVG drawing can supply a description string using the <desc> element where the description is text-only.",
      [],
    ),
    element(
      "discard",
      "allows authors to specify the time at which particular elements are to be discarded, thereby reducing the resources required by an SVG user agent. This is particularly useful to help SVG viewers conserve memory while displaying long-running documents.",
      [attributes.begin, ...attributeSets.AnimationTargetElementAttributes],
    ),
    element(
      "ellipse",
      "The ellipse element is an SVG basic shape, used to create ellipses based on a center coordinate, and both their x and y radius.",
      [
        attributes.cx,
        attributes.cy,
        attributes.rx,
        attributes.ry,
        attributes.pathLength,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "feBlend",
      "The <feBlend> SVG filter primitive composes two objects together ruled by a certain blending mode.",
      [
        attributes.in,
        attributes.in2,
        attributes.mode,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feColorMatrix",
      "The <feColorMatrix> SVG filter element changes colors based on a transformation matrix. ",
      [
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feComponentTransfer",
      "Th <feComponentTransfer> SVG filter primitive performs color-component-wise remapping of data for each pixel.",
      [
        attributes.in,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feComposite",
      "This filter primitive performs the combination of two input images pixel-wise in image space using one of the Porter-Duff compositing operations: over, in, atop, out, xor and lighter. ",
      [
        attributes.in,
        attributes.in2,
        attributes.operator,
        attribute(
          "k1",
          "The k1 attribute defines one of the value to be used within the the arithmetic operation of the <fecomposite> filter primitive. If this attribute is not set, its default value is 0.",
        ),
        attribute(
          "k2",
          "The k1 attribute defines one of the value to be used within the the arithmetic operation of the <fecomposite> filter primitive. If this attribute is not set, its default value is 0.",
        ),
        attribute(
          "k3",
          "The k1 attribute defines one of the value to be used within the the arithmetic operation of the <fecomposite> filter primitive. If this attribute is not set, its default value is 0.",
        ),
        attribute(
          "k4",
          "The k1 attribute defines one of the value to be used within the the arithmetic operation of the <fecomposite> filter primitive. If this attribute is not set, its default value is 0.",
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feConvolveMatrix",
      "The <feConvolveMatrix> SVG filter primitive applies a matrix convolution filter effect.",
      [
        attributes.in,
        attribute(
          "order",
          "the order attribute indicates the size of the matrix to be used by a <feconvolvematrix> element.",
        ),
        attribute(
          "kernelMatrix",
          "the order attribute defines the list of <number>s that make up the kernel matrix for the <feconvolvematrix> element. Values are separated by space characters and/or a comma. The number of entries in the list must equal to <orderX> by <orderY> as defined in the order attribute.",
        ),
        attribute(
          "divisor",
          "After applying the kernelMatrix of the <feconvolvematrix> element to the input image to yield a number, that number is divided by the value given to the divisor attribute to yield the final destination color value. A divisor that is the sum of all the matrix values tends to have an evening effect on the overall color intensity of the result.",
        ),
        attribute(
          "bias",
          "The bias attribute shifts the range of the filter. After applying the kernelMatrix of the <feconvolvematrix> element to the input image to yield a number and applied the divisor attribute, the bias attribute is added to each component. This allows representation of values that would otherwise be clamped to 0 or 1.",
        ),
        attribute(
          "targetX",
          "The targetX attribute determines the positioning in X of the convolution matrix relative to a given target pixel in the input image. The leftmost column of the matrix is column number zero. The value must be such that: 0 <= targetX < orderX. By default, the convolution matrix is centered in X over each pixel of the input image (i.e., targetX = floor ( orderX / 2 )).",
        ),
        attribute(
          "targetY",
          "The targetY attribute determines the positioning in Y of the convolution matrix relative to a given target pixel in the input image. The leftmost column of the matrix is column number zero. The value must be such that: 0 <= targetX < orderX. By default, the convolution matrix is centered in X over each pixel of the input image (i.e., targetX = floor ( orderX / 2 )).",
        ),
        attributes.edgeMode,
        attributes.kernelUnitLength,
        attribute(
          "preserveAlpha",
          "the preserveAlpha attribute indicates how a <feconvolvematrix> element handled alpha transparency.",
          ["true", "false"],
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feDiffuseLighting",
      "The <feDiffuseLighting> SVG filter primitive lights an image using the alpha channel as a bump map.",
      [
        attributes.type,
        attributes.in,
        attributes.surfaceScale,
        attributes.kernelUnitLength,
        attribute(
          "diffuseConstant",
          "The diffuseConstant attribute represant the kd value in the Phong lighting model. In SVG, this can be any non-negative number.If the attribute is not specified, then the effect is as if a value of 1 were specified.",
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feDisplacementMap",
      "The <feDisplacementMap> SVG filter primitive uses the pixel values from the image from in2 to spatially displace the image from in.",
      [
        attributes.in,
        attributes.in2,
        attribute(
          "scale",
          "The scale attribute define the displacement scale factor to be used on a <fedisplacementmap> filter primitive. The amount is expressed in the coordinate system established by the primitiveUnits attribute on the <filter> element.",
        ),
        attribute(
          "xChannelSelector",
          "For a <fedisplacementmap> filter primitive, The xChannelSelector attribute indicates which channel from in2 to use to displace the pixels in in along the x-axis. If attribute xChannelSelector is not specified, then the effect is as if a value of A were specified.",
          ["R", "G", "B", "A"],
        ),
        attribute(
          "yChannelSelector",
          "For a <fedisplacementmap> filter primitive, The xChannelSelector attribute indicates which channel from in2 to use to displace the pixels in in along the y-axis. If attribute yChannelSelector is not specified, then the effect is as if a value of A were specified.",
          ["R", "G", "B", "A"],
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feDistantLight",
      "The <feDistantLight> filter primitive defines a distant light source that can be used within a lighting filter primitive: <feDiffuseLighting> or <feSpecularLighting>.",
      [
        attribute(
          "azimuth",
          "The azimuth attribute represent the direction angle for the light source on the XY plane (clockwise), in degrees from the x axis.",
        ),
        attribute(
          "elevation",
          "The elevation attribute represent the direction angle for the light source from the XY plane towards the z axis, in degrees. Note the positive Z-axis points towards the viewer of the content.",
        ),
      ],
    ),
    element(
      "feDropShadow",
      "The <feDropShadow> filter primitive creates a drop shadow of the input image.",
      [
        attributes.in,
        attributes.stdDeviation,
        attributes.dx,
        attributes.dy,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feFlood",
      "The <feFlood> SVG filter primitive fills the filter subregion with the color and opacity defined by flood-color and flood-opacity.",
      [
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feFuncA",
      "The <feFuncA> SVG filter primitive defines the transfer function for the alpha component of the input graphic of its parent <feComponentTransfer> element.",
      [attributes.type, ...attributeSets.TransferFunctionAttributes],
    ),
    element(
      "feFuncB",
      "The <feFuncA> SVG filter primitive defines the transfer function for the blue component of the input graphic of its parent <feComponentTransfer> element.",
      [attributes.type, ...attributeSets.TransferFunctionAttributes],
    ),
    element(
      "feFuncG",
      "The <feFuncA> SVG filter primitive defines the transfer function for the green component of the input graphic of its parent <feComponentTransfer> element.",
      [attributes.type, ...attributeSets.TransferFunctionAttributes],
    ),
    element(
      "feFuncR",
      "The <feFuncA> SVG filter primitive defines the transfer function for the red component of the input graphic of its parent <feComponentTransfer> element.",
      [attributes.type, ...attributeSets.TransferFunctionAttributes],
    ),
    element(
      "feGaussianBlur",
      "The <feGaussianBlur> SVG filter primitive blurs the input image by the amount specified in stdDeviation, which defines the bell-curve.",
      [
        attributes.in,
        attributes.stdDeviation,
        attributes.edgeMode,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feImage",
      "The <feImage> SVG filter primitive fetches image data from an external source and provides the pixel data as output (meaning if the external source is an SVG image, it is rasterized.)",
      [
        attributes.preserveAspectRatio,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feMerge",
      "The <feMerge> SVG element allows filter effects to be applied concurrently instead of sequentially.",
      [
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feMergeNode",
      "The feMergeNode takes the result of another filter to be processed by its parent <feMerge>.",
      [attributes.in],
    ),
    element(
      "feMorphology",
      "The <feMorphology> SVG filter primitive is used to erode or dilate the input image.",
      [
        attributes.in,
        attributes.operator,
        attribute(
          "radius",
          "The radius attribute represent the radius for the operation on a given <femorphology> filter primitive. If two <number>s are provided, the first number represents a x-radius and the second value represents a y-radius. If one number is provided, then that value is used for both X and Y. The values are in the coordinate system established by the primitiveUnits attribute on the <filter> element.",
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feOffset",
      "The <feOffset> SVG filter primitive allows to offset the input image.",
      [
        attributes.in,
        attributes.dx,
        attributes.dy,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "fePointLight",
      "The <fePointLight> SVG filter primitive allows to create a point light effect.",
      [attributes.x, attributes.y, attributes.z, attributes.result],
    ),
    element(
      "feSpecularLighting",
      "The <feSpecularLighting> SVG filter primitive lights a source graphic using the alpha channel as a bump map.",
      [
        attributes.in,
        attributes.surfaceScale,
        attributes.kernelUnitLength,
        attributes.specularConstant,
        attributes.specularExponent,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feSpotLight",
      "The <feSpotLight> SVG filter primitive allows to create a spotlight effect.",
      [
        attributes.x,
        attributes.y,
        attributes.z,
        attributes.result,
        attribute(
          "pointsAtX",
          "The pointsAtX attribute represent the X location in the coordinate system established by attribute primitiveUnits on the <filter> element of the point at which the light source is pointing.",
        ),
        attribute(
          "pointsAtY",
          "The pointsAtY attribute represent the Y location in the coordinate system established by attribute primitiveUnits on the <filter> element of the point at which the light source is pointing.",
        ),
        attribute(
          "pointsAtZ",
          "The pointsAtZ attribute represent the Z location in the coordinate system established by attribute primitiveUnits on the <filter> element of the point at which the light source is pointing.",
        ),
        attribute(
          "limitingConeAngle",
          "The limitingConeAngle attribute represents the angle in degrees between the spot light axis (i.e. the axis between the light source and the point to which it is pointing at) and the spot light cone. So it defines a limiting cone which restricts the region where the light is projected. No light is projected outside the cone.",
        ),
      ],
    ),
    element(
      "feTile",
      "The <feTile> SVG filter primitive allows to fill a target rectangle with a repeated, tiled pattern of an input image.",
      [
        attributes.in,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "feTurbulence",
      "The <feTurbulence> SVG filter primitive creates an image using the Perlin turbulence function.",
      [
        attributes.type,
        attribute(
          "baseFrequency",
          "The baseFrequency attribute represent The base frequencies parameter for the noise function of the <feturbulence> primitive. If two <number>s are provided, the first number represents a base frequency in the X direction and the second value represents a base frequency in the Y direction. If one number is provided, then that value is used for both X and Y.",
        ),
        attribute(
          "numOctaves",
          "The numOctaves parameter for the noise function of the <feturbulence> primitive.",
        ),
        attribute(
          "seed",
          "The seed attribute represents the starting number for the pseudo random number generator of the <feTurbulence> primitive.",
        ),
        attribute(
          "stitchTiles",
          "The stitchTiles attribute defines how the Perlin tiles behave at the border.",
          ["noStitch", "stitch"],
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "filter",
      "The <filter> SVG element serves as container for atomic filter operations.",
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        attribute(
          "filterUnits",
          "defines the coordinate system for the attributes x, y, width and height.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        attribute(
          "primitiveUnits",
          "The primitiveUnits attribute specifies the coordinate system for the various length values within the filter primitives and for the attributes that define the filter primitive subregion.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "foreignObject",
      "The <foreignObject> SVG element allows for inclusion of a foreign XML namespace which has its graphical content drawn by a different user agent. The included foreign graphical content is subject to SVG transformations and compositing.",
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "g",
      "The <g> SVG element is a container used to group other SVG elements.",
      [
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "image",
      "The <image> SVG element allows a raster image to be included in an SVG document.",
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        attributes.preserveAspectRatio,
        attributes.crossorigin,
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.FilterPrimitiveAttributes,
      ],
    ),
    element(
      "line",
      "The <line> element is an SVG basic shape used to create a line connecting two points.",
      [
        attributes.x1,
        attributes.x2,
        attributes.y1,
        attributes.y2,
        attributes.pathLength,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "linearGradient",
      "The <linearGradient> SVG element lets authors define linear gradients to fill or stroke graphical elements.",
      [
        attributes.x1,
        attributes.x2,
        attributes.y1,
        attributes.y2,
        ...attributeSets.AnimationTargetElementAttributes,
        attributes.gradientTransform,
        attributes.gradientUnits,
        attributes.spreadMethod,
        ...attributeSets.PresentationAttributes,
      ],
    ),
    element(
      "marker",
      "The <marker> element defines the graphics that is to be used for drawing arrowheads or polymarkers on a given <path>, <line>, <polyline> or <polygon> element.",
      [
        attributes.refX,
        attributes.refY,
        attributes.orient,
        attributes.preserveAspectRatio,
        attributes.viewBox,
        attribute(
          "markerUnits",
          "The markerUnits attribute defines the coordinate system for the attributes markerWidth, markerHeight and the contents of the <marker>.",
          ["userSpaceOnUse", "strokeWidth"],
        ),
        attribute(
          "markerWidth",
          "The markerWidth represents the width of the viewport into which the <marker> is to be fitted when it is rendered.",
        ),
        attribute(
          "markerHeight",
          "The markerHeight represents the height of the viewport into which the <marker> is to be fitted when it is rendered.",
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "mask",
      "The <mask> element defines an alpha mask for compositing the current object into the background. A mask is used/referenced using the mask property.",
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        attribute(
          "maskContentUnits",
          "Defines the coordinate system for the contents of the <mask>.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        attribute(
          "maskUnits",
          "This attribute defines the coordinate system for attributes x, y, width and height on the <mask>.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        ...attributeSets.PresentationAttributes,
      ],
    ),
    element(
      "metadata",
      "The <metadata> SVG element allows to add metadata to SVG content. Metadata is structured information about data. ",
      [],
    ),
    element(
      "mpath",
      "The <mpath> sub-element for the <animateMotion> element provides the ability to reference an external <path> element as the definition of a motion path.",
      [],
    ),
    element(
      "path",
      "The <path> SVG element is the generic element to define a shape. All the basic shapes can be created with a path element.",
      [
        attributes.pathLength,
        attribute("d", "This attribute defines a path to follow."),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "pattern",
      `The <pattern> element defines a graphics object which can be redrawn at repeated x and y-coordinate intervals ("tiled") to cover an area. The <pattern> is referenced by the fill and/or stroke attributes on other graphics elements to fill or stroke those elements with the referenced pattern.`,
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        attributes.viewBox,
        attributes.preserveAspectRatio,
        attribute(
          "patternUnits",
          "The patternUnits attribute defines the coordinate system for attributes x, y, width and height.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        attribute(
          "patternContentUnits",
          "The patternContentUnits attribute defines the coordinate system for the contents of the <pattern>. Note that this attribute has no effect if attribute viewBox is specified on the <pattern> element.",
          ["userSpaceOnUse", "objectBoundingBox"],
        ),
        attribute(
          "patternTransform",
          "The patternTransform attribute contains the definition of an optional additional transformation from the pattern coordinate system onto the target coordinate system. This allows for things such as skewing the pattern tiles. This additional transformation matrix is post-multiplied to (i.e., inserted to the right of) any previously defined transformations, including the implicit transformation necessary to convert from object bounding box units to user space.",
        ),
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.PresentationAttributes,
      ],
    ),
    element(
      "polygon",
      "The <polygon> element defines a closed shape consisting of a set of connected straight line segments. The last point is connected to the first point. For open shapes see the <polyline> element.",
      [
        attributes.pathLength,
        attributes.points,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "polyline",
      `The <polyline> SVG element is an SVG basic shape that creates straight lines connecting several points. Typically a polyline is used to create open shapes as the last point doesn't have to be connected to the first point. For closed shapes see the <polygon> element.`,
      [
        attributes.pathLength,
        attributes.points,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "radialGradient",
      "The <radialGradient> SVG element lets authors define radial gradients to fill or stroke graphical elements.",
      [
        attributes.gradientUnits,
        attributes.gradientTransform,
        attributes.cx,
        attributes.cy,
        attributes.pathLength,
        attributes.spreadMethod,
        attributes.r,
        attribute(
          "fr",
          "Defines the radius of the start circle of the radial gradient. The gradient will be drawn such that the 0% <stop> is mapped to the perimeter of the start circle.",
        ),
        attribute(
          "fx",
          `For the <radialGradient> element, this attribute define the x-axis coordinate of the focal point for radial gradient. If the attribute is not specified, it's assumed to be at the same place as the center point.`,
        ),
        attribute(
          "fy",
          `For the <radialGradient> element, this attribute define the y-axis coordinate of the focal point for radial gradient. If the attribute is not specified, it's assumed to be at the same place as the center point.`,
        ),
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AnimationTargetElementAttributes,
      ],
    ),
    element(
      "rect",
      "The rect element is an SVG basic shape, used to create rectangles based on the position of a corner and their width and height. It may also be used to create rectangles with rounded corners.",
      [
        attributes.x,
        attributes.y,
        attributes.width,
        attributes.height,
        attributes.rx,
        attributes.ry,
        attributes.pathLength,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "script",
      "A SVG script element is equivalent to the script element in HTML and thus is the place for scripts (e.g., ECMAScript).",
      [
        attributes.crossorigin,
        attributes.type,
        ...attributeSets.AnimationTargetElementAttributes,
      ],
    ),
    element(
      "set",
      "The <set> element provides a simple means of just setting the value of an attribute for a specified duration. It supports all attribute types, including those that cannot reasonably be interpolated, such as string and boolean values. The <set> element is non-additive. The additive and accumulate attributes are not allowed, and will be ignored if specified.",
      [
        attributes.to,
        ...attributeSets.AnimationAttributeTargetAttributes,
        ...attributeSets.AnimationTimingAttributes,
      ],
    ),
    element(
      "stop",
      "The <stop> SVG element defines the ramp of colors to use on a gradient, which is a child element to either the <linearGradient> or the <radialGradient> element.",
      attributeSets.PresentationAttributes,
    ),
    element(
      "style",
      `The <style> SVG element allows style sheets to be embedded directly within SVG content. SVG's style element has the same attributes as the corresponding element in HTML (see HTML's <style> element).`,
      [
        attributes.type,
        attribute(
          "media",
          "This attribute defines to which media the style applies.",
        ),
      ],
    ),
    element(
      "svg",
      "The svg element can be used to embed an SVG fragment inside the current document (for example, an HTML document). This SVG fragment has its own viewport and coordinate system.",
      [
        attribute("xmlns", "Specifies the XML Namespace of the document.", [
          "http://www.w3.org/2000/svg",
        ]),
        attributes.preserveAspectRatio,
        attributes.width,
        attributes.height,
        attributes.viewBox,
        attributes.x,
        attributes.y,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "switch",
      "The <switch> SVG element evaluates the requiredFeatures, requiredExtensions and systemLanguage attributes on its direct child elements in order, and then processes and renders the first child for which these attributes evaluate to true. All others will be bypassed and therefore not rendered. If the child element is a container element such as a <g>, then the entire subtree is either processed/rendered or bypassed/not rendered.",
      [...attributeSets.PresentationAttributes],
    ),
    element(
      "symbol",
      "The <symbol> element is used to define graphical template objects which can be instantiated by a <use> element. The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics. Documents that are rich in structure may be rendered graphically, as speech, or as Braille, and thus promote accessibility. Note that a symbol element itself is not rendered. Only instances of a symbol element (i.e., a reference to a symbol by a <use> element) are rendered.",
      [
        attributes.viewBox,
        attributes.preserveAspectRatio,
        attributes.refX,
        attributes.refY,
        attributes.height,
        attributes.width,
        attributes.x,
        attributes.y,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "text",
      `The SVG <text> element defines a graphics element consisting of text. It's possible to apply a gradient, pattern, clipping path, mask, or filter to <text>, just like any other SVG graphics element.`,
      [
        attributes.dx,
        attributes.dy,
        attributes.x,
        attributes.y,
        attributes.rotate,
        attributes.lengthAdjust,
        attributes.textLength,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "textPath",
      "In addition to text drawn in a straight line, SVG also includes the ability to place text along the shape of a <path> element. To specify that a block of text is to be rendered along the shape of a <path>, include the given text within a <textPath> element which includes an href attribute with a reference to a <path> element.",
      [
        attributes.method,
        attributes.lengthAdjust,
        attributes.spacing,
        attributes.textLength,
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "title",
      "Each container element or graphics element in an SVG drawing can supply a <title> element containing a description string where the description is text-only. When the current SVG document fragment is rendered as SVG on visual media, <title> element is not rendered as part of the graphics. However, some user agents may, for example, display the <title> element as a tooltip. Alternate presentations are possible, both visual and aural, which display the <title> element but do not display path elements or other graphics elements. The <title> element generally improve accessibility of SVG documents",
      [],
    ),
    element(
      "tspan",
      "Defines a subtext within a <text> element or another <tspan> element. It allows for adjustment of the style and/or position of that subtext as needed.",
      [
        attributes.dx,
        attributes.dy,
        attributes.x,
        attributes.y,
        attributes.rotate,
        attributes.lengthAdjust,
        attributes.textLength,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "use",
      "The <use> element takes nodes from within the SVG document, and duplicates them somewhere else. The effect is the same as if the nodes were deeply cloned into a non-exposed DOM, and then pasted where the use element is, much like cloned template elements in HTML5. Since the cloned nodes are not exposed, care must be taken when using CSS to style a use element and its hidden descendants. CSS attributes are not guaranteed to be inherited by the hidden, cloned DOM unless you explicitly request it using CSS inheritance.",
      [
        attributes.x,
        attributes.y,
        attributes.height,
        attributes.width,
        ...attributeSets.AnimationTargetElementAttributes,
        ...attributeSets.PresentationAttributes,
        ...attributeSets.AriaAttributes,
      ],
    ),
    element(
      "view",
      "A view is a defined way to view the image, like a zoom level or a detail view.",
      [
        attributes.viewBox,
        attributes.preserveAspectRatio,
        ...attributeSets.AriaAttributes,
      ],
    ),
  ],
  valueSets,
  globalAttributes: GenericAttributes,
};

fs.writeFileSync("./dist/svg.json", JSON.stringify(jsonData, null, 2), "utf-8");

fs.writeFileSync(
  "./dist/attributeSets.json",
  JSON.stringify(attributeSets, null, 2),
  "utf-8",
);
