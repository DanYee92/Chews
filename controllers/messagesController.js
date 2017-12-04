const router = require("express").Router();
const db = require("../models");


module.exports = {

    getMessages: (req, res) => {
        db.Messages
        .find({ 
            $and: [
                { $or: [{senderId: req.params.myId}, {recipientId: req.params.myId}] },
                { $or: [{senderId: req.params.theirId}, {recipientId: req.params.theirId}] }
            ]
         })
        .then(result => res.json(result))
        .catch(err => console.error(err));
    }
}