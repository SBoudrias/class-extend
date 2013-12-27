Class.extend
============

Backbone's `.extend` like inheritance helper.

Usage
------------

``` javascript
var Base = require('base');

// Extend from the blank class
var Sub = Base.extend();

// Add the .extend helper to a class
MyClass.extend = Base.extend;
```

#### `.extend()`

`.extend` allow you to assign prototypes and static methods.

If no `constructor` method is assigned, the Parent constructor method will be called by default.

``` javascript
// Extend a class
var Sub = Parent.extend({
  // Overwrite the default constructor
  constructor: function () {},

  // Sub class prototypes methods
  hello: function () { console.log('hello'); }
}, {
  // Constructor static methods
  hey: function () { console.log('hey'); }
});

Sub.hey();
// LOG: hey

var instance = new Sub();
instance.hello();
// LOG: hello
```

#### `.__super__`

Sub classes are assign a static property `__super__` pointing to their parent prototype.

``` javascript
var Sub = Parent.extend();
assert(Sub.__super__.method === Parent.prototype.method);
```

License
---------------

Copyright (c) 2013 Simon Boudrias  
Licensed under the MIT license.
