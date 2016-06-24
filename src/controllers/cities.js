/* eslint-disable new-cap */
import City from '../models/city';

import express from 'express';
const router = module.exports = express.Router();

// view city list
router.get('/', (req, res) => {
  res.render('cities/index');
});

router.get('/new', (req, res) => {
  res.render('cities/new');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  City.findById(id, (err, city) => {
    res.render('cities/profile', { city });
  });
});

// new city post
router.post('/', (req, res) => {
  const city = new City(req.body);
  city.save((err) => {
    res.send(city);
  });
});
