const express = require("express");
const router = express.Router();
const eventsController = require("../Controller/eventsController");

router.get("/events",eventsController.getEventById);

router.post("/events",eventsController.addNewEvents);

router.put("/events/:id",eventsController.updateEvent);

router.delete("/events/:id",eventsController.deleteEvent);


module.exports = router;