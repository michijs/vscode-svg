# SVG

[SVG](https://developer.mozilla.org/es/docs/Web/SVG) extension for VS Code that offers auto completion and hover information for all SVG attributes from a simple JSON file.

This extension uses [vscode-custom-data](https://github.com/microsoft/vscode-custom-data) format and the [`contributes.html.customData` Contribution Point](https://code.visualstudio.com/api/extension-guides/custom-data-extension).

## Install

You can install the extension by one of the following ways:

- Search for `SVG` in extension panel and install it
- Download from [Marketplace](https://marketplace.visualstudio.com/items?itemName=michijs.vscode-svg)
- Download from [GitHub Release](https://github.com/michijs/vscode-svg/releases) page

## What is the difference between this package and [jock's](https://marketplace.visualstudio.com/items?itemName=jock.svg)?
- We support the elements and attributes specified for version 2 of SVG and remove several attributes that were deprecated and whose use may be detrimental to your product.
- We do not include references to this package in the element/attribute documentation. So the experience is cleaner.
- We only add elements / attributes support.
