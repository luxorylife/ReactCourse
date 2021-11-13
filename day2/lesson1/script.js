//var faker = require('faker');
import faker from 'faker';
import yoda from 'yodasay';

const randomName = faker.name.findName(); // Rowan Nikolaus
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
const randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log(randomName);
console.log(randomEmail);
console.log(randomCard);

console.log(
  yoda.say({
    text: 'Use yodasay, you will.',
  })
);
