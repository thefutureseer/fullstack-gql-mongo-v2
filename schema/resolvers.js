const books = require('../seeds/books');

//fake database data
// const books = [
//   {
//     title: 'My: The Awakening',
//     author: 'Your: Kate Chopin',
//     prom: true,
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//     prom: true,
//   },
// ];

//tell apollo how to fetch the data by defining a resolver
const resolvers = {
  Query: {
    books: () => books, 
  },
  };

module.exports = resolvers;