Class.extend
============

Backbone like `.extend` inheritance helper for Node.js

Usage
------------

You basically got two options:

``` javascript
// 1. Extend from the blank class
const Base = require('class-extend');
const Sub = Base.extend();

// 2. Add the .extend helper to a class
MyClass.extend = require('class-extend').extend;
```

#### `.extend()`

`.extend` allow you to assign prototype and static methods.

If no `constructor` method is assigned, the parent constructor method will be called by default.

``` javascript
// Extend a class
const Sub = Parent.extend({
  // Overwrite the default constructor
  constructor() {},

  // Sub class prototypes methods
  hello() { console.log('hello'); }
}, {
  // Constructor static methods
  hey() { console.log('hey'); }
});

Sub.hey();
// LOG: hey

const instance = new Sub();
instance.hello();
// LOG: hello
```

#### `.__super__`

Sub classes are assigned a `__super__` static property pointing to their parent prototype.

``` javascript
const Sub = Parent.extend();
assert(Sub.__super__ === Parent.prototype);
```

License
---------------

Copyright (c) 2025 Simon Boudrias  
Licensed under the MIT license.
