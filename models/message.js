const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema ({
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
      type: String,
      required: true
    }
})

const Message = mongoose.model("Message", MessageSchema);
module.exports = Message;
