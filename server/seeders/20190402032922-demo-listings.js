'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('listings', [{
      listing_id: '88af8b1e-c0c9-4084-8304-256b2ae0c8b8',
      user_id: '27af8b1e-c0c9-4084-8304-256b2ae0c8b2',
      address: '1600 Holloway ave',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94132',
      bedroom: 3,
      bathroom: 2,
      squarefoot: 3000,
      price: 2000,
      distance: 10,
      housing_type: 'Condo',
      confirmation: true
    },
    {
      listing_id: '88af8b1e-c0c9-4084-8304-256b2ae0c8b9',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '415 Mission st',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94105',
      bedroom: 4,
      bathroom: 5,
      squarefoot: 5000,
      price: 112000,
      distance: 50,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '89aa8b1e-c0c9-4084-8304-256b2ae0c8b8',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '2127 Polk st',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94109',
      bedroom: 2,
      bathroom: 1,
      squarefoot: 1500,
      price: 11000,
      distance: 5,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '81afcb1e-c0c9-4084-8304-256b2ae0c8b1',
      user_id: '27af8b1e-c0c9-4084-8304-256b2ae0c8b2',
      address: '400 40th St',
      city: 'Oakland',
      state: 'California',
      zipcode: '94609',
      bedroom: 5,
      bathroom: 3,
      squarefoot: 2000,
      price: 17000,
      distance: 2.4,
      housing_type: 'House',
      confirmation: true
    },
    {
      listing_id: '83df8b1e-c0c9-4084-8304-256b2ae0c8b3',
      user_id: '27af8b1e-c0c9-4084-8304-256b2ae0c8b2',
      address: '901 Market St Suite 600',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94103',
      bedroom: 5,
      bathroom: 2,
      squarefoot: 19000,
      price: 333000,
      distance: 2.1,
      housing_type: 'Townhome',
      confirmation: true
    },
    {
      listing_id: '85bf8b1e-c0c9-4084-8304-256b2ae0c8b5',
      user_id: '27af8b1e-c0c9-4084-8304-256b2ae0c8b2',
      address: '672 Geary St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94102',
      bedroom: 1,
      bathroom: 1,
      squarefoot: 1000,
      price: 11000,
      distance: 1.1,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '81cf8b1e-c0c9-4084-8304-256b2ae0c8b1',
      user_id: '27af8b1e-c0c9-4084-8304-256b2ae0c8b2',
      address: ' 3319 Mission St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94110',
      bedroom: 6,
      bathroom: 2,
      squarefoot: 7000,
      price: 34000,
      distance: .5,
      housing_type: 'House',
      confirmation: true
    },
    {
      listing_id: '87ae8b1e-c0c9-4084-8304-256b2ae0c8b7',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '2816 Diamond St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94131',
      bedroom: 3,
      bathroom: 2,
      squarefoot: 3000,
      price: 56000,
      distance: .3,
      housing_type: 'Condo',
      confirmation: true
    },
    {
      listing_id: '87af8b1e-c0c9-4084-8304-256b2ae0c8b7',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '508 4th St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94107',
      bedroom: 6,
      bathroom: 3,
      squarefoot: 32000,
      price: 98000,
      distance: .7,
      housing_type: 'Townhome',
      confirmation: true
    },
    {
      listing_id: '81af8b1e-c0c9-4084-8304-256b2ae0c8b6',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '345 Spear St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94105',
      bedroom: 8,
      bathroom: 4,
      squarefoot: 82000,
      price: 98000,
      distance: .9,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '86cf8b1e-c0c9-4084-8304-256b2ae0c8b2',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '3814 Noriega St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94122',
      bedroom: 3,
      bathroom: 2,
      squarefoot: 2000,
      price: 1500,
      distance: 1.6,
      housing_type: 'Condo',
      confirmation: true
    },
    {
      listing_id: '84cf8b1e-c0c9-4084-8304-256b2ae0c8b3',
      user_id: '28bf8b1e-c0c9-4044-8304-256b2ae0c8b2',
      address: '151 3rd St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94103',
      bedroom: 5,
      bathroom: 2,
      squarefoot: 2000,
      price: 1000,
      distance: 2.7,
      housing_type: 'House',
      confirmation: true
    },
    {
      listing_id: '82cf8b1e-c0c9-4084-8304-256b2ae0c8b4',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '1355 Market St #900',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94103',
      bedroom: 9,
      bathroom: 4,
      squarefoot: 4000,
      price: 900,
      distance: 3.8,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '81bf8b1e-c0c9-4084-8304-256b2ae0c8b5',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '1326 9th Ave',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94122',
      bedroom: 3,
      bathroom: 3,
      squarefoot: 3000,
      price: 3000,
      distance: 2.1,
      housing_type: 'Condo',
      confirmation: true
    },
    {
      listing_id: '88bf8b1e-c0c9-4084-8304-256b2ae0c8b3',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '1525 Cortland Ave',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94110',
      bedroom: 7,
      bathroom: 2,
      squarefoot: 2000,
      price: 750,
      distance: .4,
      housing_type: 'Apartment',
      confirmation: true
    },
    {
      listing_id: '84af8b1e-c0c9-4084-8304-256b2ae0c8b5',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '645 Larkin St',
      city: 'San Francisco',
      state: 'California',
      zipcode: '94109',
      bedroom: 2,
      bathroom: 1,
      squarefoot: 2300,
      price: 870,
      distance: 4.2,
      housing_type: 'House',
      confirmation: true
    },
    {
      listing_id: 'babb0ebc-2923-416c-88e0-d415a5fdcbf5',
      user_id: '29bf8b1e-d0c9-4044-8304-256b2ae0c8b3',
      address: '287 Westmoor Ave',
      city: 'Daly City',
      state: 'California',
      zipcode: '94015',
      bedroom: 2,
      bathroom: 1,
      squarefoot: 2300,
      price: 870,
      distance: 4.2,
      housing_type: 'House',
      confirmation: true
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listings', null, {});
  }
};