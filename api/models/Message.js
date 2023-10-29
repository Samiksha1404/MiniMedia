const mongoose = require("mongoose");
//Message ka Schema 
const MessageSchema = new mongoose.Schema(
  {
   conversationId:{
    type:String
   },
   sender:{
    type:String
   },
   text:{
    type:String,
   }
    },
  
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
