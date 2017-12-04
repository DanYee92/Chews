const router = require("express").Router();
const db = require("../models");


module.exports = {
    getMessages: (req, res) => {
        db.Message
            .find({ 
                $or: [
                    { $and: [{senderId: req.params.myId}, {recipientId: req.params.theirId}] },
                    { $and: [{senderId: req.params.theirId}, {recipientId: req.params.myId}] }
                ]
            })
            .then(result => res.json(result))
            .catch(err => console.error(err));
    },
    
    sendMessage: (req, res) => {
        db.Message
            .create(req.body)
            .then(newMessage => res.json(newMessage))
            .catch(err => console.error(err))
    }
}