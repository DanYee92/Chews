const router = require("express").Router();
const db = require("../models");
const userController = require("../controllers/userController");
const biteController = require("../controllers/biteController");

module.exports = app => {
  console.log("Back end routes connected to server 3001");

  //POST - make a new user
  app.post("/api/user/create", (req, res) =>
    userController.createNewUser(req, res)
  );

  // GET - Get a user's info
  app.get("/api/user/:userId", (req, res) =>
    userController.getAllUserInfo(req, res)
  );

  app.patch("/api/user/:userId/update", (req, res) => {
    userController.editUserProfile(req, res);
  });

  //POST - create a new bite
  app.post("/api/bite/create", (req, res) =>
    biteController.createNewBite(req, res)
  );

  //GET - Get bite detail
  app.get("/api/bite/:biteId", (req, res) =>
    biteController.getBiteDetail(req, res)
  );

  //GET - get bites from the db
  //Need to add within a specified date range
  app.get("/api/bites/search/city/:city", (req, res) =>
    biteController.searchForBites(req, res)
  );

  //PUT - update a bite to be "booked"
  app.patch("/api/user/:travelerId/bite/:biteId/book", (req, res) =>
    biteController.bookBite(req, res)
  );

  //GET - all of a user's booked bites
  app.get("/api/user/:userId/bites/booked", (req, res) =>
    userController.getUserBookedBites(req, res)
  );

  //GET - all of a user's unbooked bites
  app.get("/api/user/:userId/bites/unbooked", (req, res) =>
    userController.getUserUnbookedBites(req, res)
  );

  app.get(
    "/api/user/:userId/bites/:bookingStatus/:timePeriod/:category?",
    (req, res) => {
      biteController.getUserBites(req, res);
    }
  );

  //PUT - cancel a bite by a traveler, update isBooked to false
  app.patch("/api/user/:travelerId/:biteId/cancel", (req, res) =>
    biteController.cancelBiteTraveler(req, res)
);

//PUT - cancel a bite by a local
  app.delete("/api/user/:localId/:biteId/cancel", (req, res) => 
    biteController.cancelBiteLocal(req, res)
)

  app.get("/api/apologize", (req, res) => {
    //TO DO - nicole apologize counter
  });
};
