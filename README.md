# canvas-editor



a rich text editor by canvas/svg

[View Demo](https://hufe.club/canvas-editor) · [View Docs](https://hufe.club/canvas-editor-docs) · [Report Bug](https://github.com/Hufe921/canvas-editor/issues/new?assignees=&labels=&projects=&template=bug_report.yml) · [Request Feature](https://github.com/Hufe921/canvas-editor/issues/new?assignees=&labels=%3Asparkles%3A+feature+request&projects=&template=feature_request.yml) · [FAQ](https://github.com/Hufe921/canvas-editor/discussions)

Love the project? Please consider [donating(赞助)](https://hufe.club/donate.jpg) to help it improve!

## Tips

1. Official plugin: [canvas-editor-plugin](https://github.com/Hufe921/canvas-editor-plugin)
2. The render layer by svg is under development, see [feature/svg](https://github.com/Hufe921/canvas-editor/tree/feature/svg)
3. The export pdf feature is available now, see [feature/pdf](https://github.com/Hufe921/canvas-editor/tree/feature/pdf)
4. The AI-powered text processing demo, see [feature/ai](https://github.com/Hufe921/canvas-editor/tree/feature/ai)
5. Table pagination [#41](https://github.com/Hufe921/canvas-editor/issues/41) is under active development, see: [poc/table-paging](https://github.com/Hufe921/canvas-editor/tree/poc/table-paging) · [demo](https://hufe.club/canvas-editor-table/)

## Basic usage

```bash
npm i hardengzd-canvas-editor --save
```

```html
<div class="canvas-editor"></div>
```

```javascript
import Editor from '@hufe921/canvas-editor'

new Editor(document.querySelector('.canvas-editor'), {
  main: [
    {
      value: 'Hello World'
    }
  ]
})
```

## Features

- Rich text operations (Undo, Redo, Font, Size, Bold, Italic, Underline, Strikeout, Superscript, Alignment, Title, List, ...)
- Insert elements (Table, Image, Link, Code Block, Page Break, Math Formula, Date Picker, Block, ...)
- Print (Based on canvas to picture, pdf drawing)
- Controls (Select, Text, Date, Radio, Checkbox)
- Contextmenu (Internal, Custom)
- Shortcut keys (Internal, Custom)
- Drag and Drop(Text, Element, Control)
- Header, Footer, Page Number
- Page Margin
- Watermark
- Pagination
- Comment
- Catalog

## Roadmap

1. Table paging
2. Control rules
3. Improve performance
4. [CRDT](https://github.com/Hufe921/canvas-editor/tree/feature/CRDT)

## Snapshot

image

## Install

`yarn`

## Dev

`npm run dev`

## Build

#### app

`npm run build`

#### lib

`npm run lib`