# lezer-circom

[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg)](https://github.com/RichardLitt/standard-readme) [![license](https://img.shields.io/github/license/joeltg/lezer-circom)](https://opensource.org/licenses/MIT) [![NPM version](https://img.shields.io/npm/v/lezer-circom)](https://www.npmjs.com/package/lezer-circom) ![TypeScript types](https://img.shields.io/npm/types/lezer-circom)

A Lezer grammar for the [circom](https://docs.circom.io/) language.

> ⚠️ This is a low-level library for parsing a low-level circom **AST** - if you're looking for the CodeMirror language extension, you want the [codemirror-lang-circom](https://github.com/joeltg/codemirror-lang-circom) package instead.

> ⚠️ This grammar is very rough alpha-quality! There are almost certainly bugs.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm i lezer-circom
```

## Usage

```ts
import { parser } from "lezer-circom"

const tree = parser.parse(`

pragma circom 2.0.1;
// ...

`)

// do something with tree.cursor() or tree.topNode ...
```

You can find documentation for the LR parser interface [on the Lezer website](https://lezer.codemirror.net/docs/ref/).

## API

```ts
import type { LRParser } from "@lezer/lr"

export const parser: LRParser
```

## Testing

Tests use [AVA 4](https://github.com/avajs/ava) (currently in alpha) and live in the [test](./test/) directory.

```
npm run test
```

## Contributing

This library is just intended to export the compiled lezer grammar, so I don't expect to add any features or functionality beyond that. If you find issues with the grammar definition itself please open an issue to discuss them!

## License

GPLv3 © 2021 Joel Gustafson
