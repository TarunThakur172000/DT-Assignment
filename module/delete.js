const db = require("../config/db");
const con = db.connectDB();
const {ObjectId} = require('mongodb');
async function deleteEvent(id) {

    const data = await con;
    const collection = data.collection("Events");
    const res = collection.deleteOne({_id:new ObjectId(id)});
    return res;
    
}

module.exports = {deleteEvent}