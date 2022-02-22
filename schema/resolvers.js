const books = require('../models/Book')

//tell apollo how to fetch the data by defining a resolver
const resolvers = {
  Query: {
    books: () => books, 
    
    getAllBooks: async () => {
      return await books.find();
    }
  },  
};

module.exports = resolvers;