/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';

const router = module.exports = express.Router();

router.get('/', (req, res) => {
  const countries = Country.find();
  res.render('countries/index', { countries });
});

router.get('/new', (req, res) => {
  res.render('countries/new');
});

router.get('/:id', (req, res) => {
  const country = Country.find(req.params.id);
  res.render('countries/show', { country });
});

router.post('/', (req, res) => {
  const country = new Country(req.body);
  console.log('NEW COUNTRY: ' + req.body.name);
  country.save( (e) => {
      res.redirect('/');
  }
  );

});
