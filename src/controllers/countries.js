/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  Country.find().populate(['cityIds']).exec((err, countries) => {
    res.render('countries/index', { countries });
  });
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  Country.find(req.params.id).populate('cityIds').exec((err, country) => {
    res.render('countries/show', { country });
  });
});

router.post('/', (req, res) => {
  const country = new Country(req.body);
  country.save(() => {
    res.redirect('/country');
  });
});
