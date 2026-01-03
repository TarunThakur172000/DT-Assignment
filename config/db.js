const mongoDB = require('mongodb');

const uri = "mongodb://127.0.0.1:27017";

const client = new mongoDB.MongoClient(uri);

async function connectDB(){
    try{
      const con = await client.connect();
      const database = con.db("DT");
      return database;
    }catch(e){
      console.error(e);
    }
}

module.exports = {connectDB}