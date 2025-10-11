function once(fn) {
  // Your code here ...

  let call = false;
  let result;
  return function (...args) {
    if (!call)
    {
      result = fn.apply(this, args);
      call = true
    }
    return result;
  }
}
module.exports = once;
