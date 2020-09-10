'use strict';

var base = module.superModule;

function store(storeObject) {
    base.call(this, storeObject);
    this.email = storeObject.email;
}

store.prototype = Object.create(base.prototype);

module.exports = store;
