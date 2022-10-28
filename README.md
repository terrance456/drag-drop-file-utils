# Drag-drop-file-utils

[![Version](https://img.shields.io/npm/v/drag-drop-file-utils.svg)](https://www.npmjs.com/package/drag-drop-file-utils) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/drag-drop-file-utils.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/drag-drop-file-utils

Simple drag-drop-file helper library to use with vanilla js or any javascript framework. The library is flexible since it only set up the boiler plate for basic drag-drop

## Demo

Coming soon!

## Installation

Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save drag-drop-file-utils
```

## Usage

```js
import { DragDropFile } from "drag-drop-file-utils";

const dropContainer = document.querySelector("#drop-container");
const dragDropFile = new DragDropFile(dropContainer);

window.onload = () => {
  dragDropFile.intializeDragger();
};
```
