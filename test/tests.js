describe('to-camel-case', function () {

var assert = require('assert');
var camel = require('to-camel-case');

it('space case', function () {
  assert('spaceCase' == camel('space case'));
});

it('camelCase', function () {
  assert('camelCase' == camel('camelCase'));
});

it('snake_case', function () {
  assert('snakeCase' == camel('snake_case'));
});

it('dot.case', function () {
  assert('dotCase' == camel('dot.case'));
});

it('weird[case', function () {
  assert('weirdCase' == camel('weird[case'));
});

});