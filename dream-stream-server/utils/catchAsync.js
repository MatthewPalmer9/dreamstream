// This utility takes away from having to write out cluttering .catch() blocks.
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
