// |reftest| skip -- class-methods-private is not supported
// Copyright (C) 2019 Jaideep Bhoosreddy (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Every new evaluation of a class creates a different brand (private method)
esid: sec-privatefieldget
info: |
  ClassTail : ClassHeritage { ClassBody }
    ...
    11. Let proto be ObjectCreate(protoParent).
    ...
    31. If PrivateBoundIdentifiers of ClassBody contains a Private Name P such that the P's [[Kind]] field is either "method" or "accessor",
      a. Set F.[[PrivateBrand]] to proto.
    ...

  PrivateBrandCheck(O, P)
    1. If O.[[PrivateBrands]] does not contain an entry e such that SameValue(e, P.[[Brand]]) is true,
      a. Throw a TypeError exception.
features: [class, class-methods-private]
---*/

let classStringExpression = `
return class C {
  #m() { return 'test262'; }

  access(o) {
    return o.#m();
  }
}
`;

let createAndInstantiateClass = function () {
  let realm = $262.createRealm();
  let classFactoryFunction = new (realm.global.Function)(classStringExpression);
  let Class = classFactoryFunction();
  let obj = new Class();
  obj.realm = realm;
  return obj;
};

let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();

assert.sameValue(c1.access(c1), 'test262');
assert.sameValue(c2.access(c2), 'test262');

assert.throws(c1.realm.global.TypeError, function() {
  c1.access(c2);
}, 'invalid access of c1 private method');

assert.throws(c2.realm.global.TypeError, function() {
  c2.access(c1);
}, 'invalid access of c2 private method');

reportCompare(0, 0);