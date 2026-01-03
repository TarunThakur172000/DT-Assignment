const db = require("../config/db");
const con = db.connectDB();
const {ObjectId} = require("mongodb");
async function updateEvent(id,updatedEvent) {
    const data = await con;
    const collection = data.collection("Events");
    const result = await collection.updateOne({_id:new ObjectId(id)},{$set:updatedEvent});
    return result;
}

module.exports = {updateEvent};