var javelin = require('../index');

var locals = {
  test: {
    foo: 'foo', 
    bar: 'bar',
    baz: 'baz',
    qux: [
      { one: 'foo', two: 'bar' },
      { one: 'foo', two: 'bar' },
      { one: 'foo', two: 'bar' }
    ]
  }
};

var compile = javelin.compile('simple.jav', 'json');
var ast = compile(locals, true);
var result = compile(locals);

console.log(JSON.stringify(result, null, 4));