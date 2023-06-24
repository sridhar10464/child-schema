const express = require("express");
const { City, User } = require("../models/models");

const router = express.Router();

const citiesController = async (req, res) => {
    try {
        const { name, country } = req.body;
        const city = new City({ name, country });
        await city.save();
        res.json(city);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
};

const userController = async (req, res) => {
    try {
        const { name, email, cityId } = req.body;
        const user = new User({ name, email, city: cityId });
        await user.save();
        res.json(user);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
};

const getUserController = async (req, res) => {
    try {
        const users = await User.aggregate([
          {
            $lookup: {
              from: 'cities',
              localField: 'city',
              foreignField: '_id',
              as: 'city',
            },
          },
          { $unwind: '$city' },
        ]);
        res.json(users);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
}

module.exports = { citiesController, userController, getUserController }