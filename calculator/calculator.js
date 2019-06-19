module.exports = {
  add,
};

// set default values!
// we can also use spread operator on arguments instead Array.from()
function add(x) {
  // check if we have an array or just separate values
  const args = Array.isArray(x) ? x : Array.from(arguments);

  return args.reduce((acc, val) => {
    return acc + val;
  }, 0); // 0 is our default value
}