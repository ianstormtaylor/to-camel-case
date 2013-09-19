# to-space-case

  Convert a non-space-case string to a space-case string.

## Installation

    $ component install ianstormtaylor/to-space-case

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
