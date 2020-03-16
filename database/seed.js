const db = require('./index.js');
const faker = require('faker');

const usersSeedData = () => {

  let username = faker.name.firstName();
  let avatar = faker.image.avatar();
  let queryString = `INSERT INTO users (name, avatar) VALUES ('${username}', '${avatar}')`
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('Error seeding the users table in the database', err);
    }
  });
};

const listingsSeedData = () => {

  let com_rating = faker.finance.amount(0, 5, 1);
  let acuracy_rating = faker.finance.amount(0, 5, 1);
  let clean_rating = faker.finance.amount(0, 5, 1);
  let checkin_rating = faker.finance.amount(0, 5, 1);
  let location_rating = faker.finance.amount(0, 5, 1);
  let value_rating = faker.random.number(5);
  let star_rating = faker.random.number(5);

  let queryString = `INSERT INTO listings (com_rating, acuracy_rating, clean_rating, checkin_rating, location_rating, value_rating, star_rating)
  VALUES (${com_rating}, ${acuracy_rating}, ${clean_rating}, ${checkin_rating}, ${location_rating}, ${value_rating}, ${star_rating})`
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('Error seeding the listing table in the database', err);
    }
  })
};

const reviewsSeedData = () => {

  let text = faker.lorem.paragraph();
  let date = faker.date.month() + " 2019";
  let queryString = `INSERT INTO reviews (text, date) VALUES ('${text}', '${date}')`
  db.query(queryString, (err, data) => {
    if (err) {
      console.log('Error seeding the reviews table in the database', err);
    }
  })
};

usersSeedData();
listingsSeedData();
reviewsSeedData();

module.exports = {
  usersSeedData,
  listingsSeedData,
  reviewsSeedData
}