const orm = require("../config/orm.js");
const wishlist = {
  all: function(cb) {
    orm.all("wishlist", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("wishlist", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("wishlist", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
console.log(`wishlist model: \n model's import of ${orm} ======= \n ${wishlist}`)
module.exports = wishlist;