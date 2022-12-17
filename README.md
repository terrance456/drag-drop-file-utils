# Drag-drop-file-utils

[![Version](https://img.shields.io/npm/v/drag-drop-file-utils.svg)](https://www.npmjs.com/package/drag-drop-file-utils) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/drag-drop-file-utils.svg?style=flat-square
[download-url]: https://www.npmjs.com/package/drag-drop-file-utils

Simple drag-drop-file helper library to use with vanilla js or any javascript framework. The library is flexible since it only set up the boiler plate for basic file drag-drop

## Demo

[![Edit drag-drop-file-utils](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/quirky-liskov-vzvroi)

## Installation

Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save drag-drop-file-utils
```

## Usage

### HTML

```html
<div id="drop-container">
  <input type="file" id="drop-file-input" multiple />
</div>
```

### JS

```js
import { DragDropFile } from "drag-drop-file-utils";

const dropContainer = document.querySelector("#drop-container");

const dragEvents = {
  onDragDrop: (e) => console.log(e),
  onDragEnter: (e) => console.log(e),
  onDragOver: (e) => console.log(e),
  onDragLeave: (e) => console.log(e),
};

const dragDropFile = new DragDropFile(dropContainer, dragEvents);

window.onload = () => {
  dragDropFile.intializeDragger();
};
```

## Options

<table>
  <thead>
    <tr>
      <th>Options</th>
      <th>Type</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>element</td>
      <td>HTMLElement</td>
      <td> A valid HTMLElement should be passed to <code>DragDropFile</code> class, this should be the element that's going to grab the files from drop.</td>
      <td><code>document.querySelector("#drop-container")<code></td>
    </tr>
    <tr>
      <td>dragFn</td>
      <td>DragEventCallbacks</td>
      <td>Pass in the callbacks in to <code>DragDropFile</code> class, this callbacks will be fired according to the event types..</td>
      <td>
        <code>{ </br></code>
        <code> onDragDrop?: (e: DragEvent) => void; </br></code>
        <code> onDragEnter?: (e: DragEvent) => void; </br></code>
        <code> onDragOver?: (e: DragEvent) => void; </br></code>
        <code> onDragLeave?: (e: DragEvent) => void; </br></code>
        <code>} </br></code>
      </td>
    </tr>
     <tr>
      <td>intializeDragger</td>
      <td>Method</td>
      <td> This method initialize the container and adds relevant event listeners and this method should be called once the container is in the DOM</td>
      <td>
        <code>dragDropFile.intializeDragger(); <br/><code>
      </td>
    </tr>
    <tr>
      <td>getFiles</td>
      <td>Method</td>
      <td>Should return current files that was drop at the container</td>
      <td>
        <code>dragDropFile.getFiles(); <br/><code>
      </td>
    </tr>
    <tr>
      <td>clearFiles</td>
      <td>Method</td>
      <td>Should remove all the files that was captured in the drop</td>
      <td>
        <code>dragDropFile.clearFiles(); <br/><code>
      </td>
    </tr>
    <tr>
      <td>removeFile</td>
      <td>Method</td>
      <td>Should remove a specific file from the list of files that was dropped according to the index number</td>
      <td>
        <code>dragDropFile.removeFile(0); <br/><code>
      </td>
    </tr>
  </tbody>
</table>
