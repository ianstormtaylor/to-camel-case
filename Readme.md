# to-camel-case

  Convert a string to a camel case.

## Installation

    $ component install ianstormtaylor/to-camel-case

## Example

```js
var camel = require('to-camel-case');

camel('space case'); // "spaceCase"
camel('snake_case'); // "snakeCase"
camel('dot.case');   // "dotCase"
camel('weird[case'); // "weirdCase"
```

## API

### toCamelCase(string)
  
  Returns the camel-case variant of a `string`.

## License

  MIT
