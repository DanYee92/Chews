const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessagesSchema = new Schema ({
    senderId: {
		type: Schema.Types.String,
		ref: "User",
		required: true
    },
    
    recipientId: {
		type: Schema.Types.String,
		ref: "User",
		required: true
    },
    
    timestamp: {
		type: Date,
		default: Date.now()
    },
    
    body: {
        type: String
    }
})