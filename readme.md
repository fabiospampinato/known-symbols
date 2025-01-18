# Known Symbols

A little library for working with [well-known symbols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols).

## Install

```sh
npm install known-symbols
```

## Usage

```ts
import Known from 'known-symbols';

// Retrieve all the well-known symbols

const symbols = Known.getSymbols (); // [Symbol.asyncIterator, Symbol.hasInstance, Symbol.isConcatSpreadable, ...]

// Retrieve all the names of well-known symbols

const names = Known.getNames (); // ['asyncIterator', 'hasInstance', 'isConcatSpreadable', ...]

// Retrieve the symbol of a well-known symbol, given the name

const symbol = Known.getSymbol ( 'asyncIterator' ); // Symbol.asyncIterator

// Retrieve the name of a well-known symbol, given the symbol

const name = Known.getName ( Symbol.asyncIterator ); // 'asyncIterator'

// Check if a symbol is a well-known symbol

const isKnownSymbol = Known.hasSymbol ( Symbol.asyncIterator ); // true

// Check if a string is the name of a well-known symbol

const isKnownName = Known.hasName ( 'asyncIterator' ); // true
```

## License

MIT © Fabio Spampinato
