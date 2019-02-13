const orm = require("../config/orm.js");
// Since ORM was used to "translate" SQL commands, this gives commands for the controller to use up:
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

// Export the database functions for the controller 
console.log(`wishlist model`)
module.exports = wishlist;
