describe('to-camel-case', function () {

var assert = require('assert');
var camel = require('to-camel-case');

it('shouldnt touch camel case', function () {
  assert('aCamelCaseString' == camel('aCamelCaseString'));
});

it('should convert space case', function () {
  assert('aSpaceCaseString' == camel('a space case string'));
});

it('should convert snake case', function () {
  assert('aSnakeCaseString' == camel('a_snake_case_string'));
});

it('should convert dot case', function () {
  assert('aDotCaseString' == camel('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('aTitleCaseOfString' == camel('A Title: Case of String'));
});

it('should convert constant case', function () {
  assert('aConstantCaseString' == camel('A_CONSTANT_CASE_STRING'));
});

});