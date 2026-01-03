const { ObjectId } = require('mongodb');
const dbs = require('../config/db');
const con =  dbs.connectDB();
  


async function getEvents(query){
        const {type,limit=10,page=1} = query;
      
        const data = await con;
        const collection = data.collection("Events");
        const events =  collection.find({}).sort({createdAt:(type==="latest") ? -1 : 1}).skip((Number(page)-1)*Number(limit)).limit(Number(limit)).toArray();
       
        return events;
}


async function getEventByID(id){
        const data = await con;
        const collection = data.collection("Events");
        const events = collection.findOne({_id:new ObjectId(id)});
       
        return events;
}

module.exports = {getEvents,getEventByID}

