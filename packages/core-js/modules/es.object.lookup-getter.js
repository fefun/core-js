'use strict';
var toObject = require('core-js-internals/to-object');
var toPrimitive = require('./_to-primitive');
var getPrototypeOf = require('./_object-get-prototype-of');
var getOwnPropertyDescriptor = require('./_object-get-own-property-descriptor').f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
if (require('core-js-internals/descriptors')) {
  require('./_export')({ target: 'Object', proto: true, forced: require('./_object-forced-pam') }, {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this);
      var K = toPrimitive(P, true);
      var descriptor;
      do {
        if (descriptor = getOwnPropertyDescriptor(O, K)) return descriptor.get;
      } while (O = getPrototypeOf(O));
    }
  });
}
