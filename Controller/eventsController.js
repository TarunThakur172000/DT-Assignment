const { addNewEvent } = require("../module/Create");
const { deleteEvent } = require("../module/delete");
const read = require("../module/read");
const { updateEvent } = require("../module/update");

exports.getEventById = async (req,res)=>{
    try{
        const {id,type,limit,page} = req.query;
        if(id){
        const events = await read.getEventByID(id);
        return res.json(events);
        }else{
            const events = await read.getEvents({type,limit,page});
            return res.json(events);
        }
    }catch (e){ 
        res.status(500).json({"message":"Error","error":e.message});
    }
}


exports.addNewEvents = async (req, res) => {
    const data = await req.body;
    try{
        if(!req.body.type || typeof(req.body.type) !== "string" || !req.body.name || !req.body.schedule){
            return res.status(422).json({
                "error":"Invalid Detail",
                "Event details":data
            })  
        }
        const result = await addNewEvent(data);
        res.status(201).json(result);
     }catch(e){
        res.status(500).json({"message":"Error","error":e.message});
     }
};


exports.updateEvent = async (req,res) =>{
    const data = req.body;
    const id = req.params.id;
    try{
        const result = await updateEvent(id,data);
        if(result.matchedCount==0){
            return res.status(404).json({
                "message":"Event Not Found"
            })
        } 
        return res.json(result);
    }catch(e){
        res.status(500).json({"message":"Error","error":e.message});
    }
};  


exports.deleteEvent = async(req,res) =>{
    const id = req.params.id;
    try{
        const result =  await deleteEvent(id);
        if(result.deletedCount==0){
            return res.status(404).json({
                "message":"Event Not Found"
            })
        } 
        return res.json(result);
    }catch(e){
        res.status(500).json({"message":"Error","error":e.message});
    }
}


