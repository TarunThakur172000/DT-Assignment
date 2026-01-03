const dbs = require("../config/db");
const con = dbs.connectDB();

async function addNewEvent(event) {
    const data = await con;
    event={...event,createdAt:new Date()}
    const collection = data.collection("Events");
    const result = await collection.insertOne(event);
}

module.exports = { addNewEvent };
