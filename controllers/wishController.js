const express = require("express");
const router = express.Router();
//now to "control" that object we just made
const wishlist = require("../model/wishlist.js");
console.log('controllerjs loaded \n')

router.get("/", function(req, res) {
    wishlist.all(function(data) {
      let hbsObject = {
        wishlist: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/wishlist", function(req, res) {
    wishlist.create([
      "name", "bought"
    ], [
      req.body.name, req.body.bought
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/wishlist/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    wishlist.update({
      bought: req.body.bought
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/wishlist/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    wishlist.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;