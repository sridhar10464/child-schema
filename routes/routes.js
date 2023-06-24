const express = require("express");
const { citiesController, userController, getUserController } = require("../controllers/routesController");

const router = express.Router();

router.post("/cities", citiesController);

router.post("/users", userController);

router.get("/users", getUserController);

module.exports = router;