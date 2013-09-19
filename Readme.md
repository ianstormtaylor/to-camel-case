# to-camel-case

  Convert a non-camel-case string to a camel-case string.

## Installation

    $ component install ianstormtaylor/to-camel-case

## Example

```js
var space = require('to-space-case');

space('space case'); // "spaceCase"
space('snake_case'); // "snakeCase"
space('dot.case');   // "dotCase"
space('weird[case'); // "weirdCase"
```

## API

### toSpaceCase(string)
  
  Returns the space-case variant of a `string`.

## License

  MIT
