// Polyfill for Object.hasOwn
if (!Object.hasOwn) {
    Object.hasOwn = function(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
    };
}
