const assert = require('assert');
const sinon = require('sinon');
const Base = require('..');

describe('.extend', function () {
  it('create a new object inheriting the Generator', function () {
    assert.ok(new (Base.extend()) instanceof Base);
  });

  it('pass the extend method along', function () {
    const Sub = Base.extend();
    assert.ok(Sub.extend);
  });

  it('assign prototype methods', function () {
    const proto = { foo: function () {} };
    const Sub = Base.extend(proto);
    assert.equal(Sub.prototype.foo, proto.foo);
  });

  it('assign static methods', function () {
    const staticProps = { foo: function () {} };
    const Sub = Base.extend({}, staticProps);
    assert.equal(Sub.foo, staticProps.foo);
  });

  it('assign __super__ static property', function () {
    assert.equal(Base.extend().__super__, Base.prototype);
  });

  it('allow setting a custom constructor', function () {
    const ctor = sinon.spy();
    const Sub = Base.extend({ constructor: ctor });
    new Sub();
    assert.ok(ctor.calledOnce);
  });

  it('call the parent constructor by default', function () {
    const ctor = sinon.spy();
    ctor.extend = Base.extend;
    const Sub = ctor.extend();
    new Sub();
    assert.ok(ctor.calledOnce);
  });

  it('set constructor as the children', function () {
    const Child = Base.extend();
    assert.equal(Child.prototype.constructor, Child);
  });
});
