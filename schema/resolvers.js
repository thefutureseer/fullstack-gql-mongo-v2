const books = require('../models/Book')

//tell apollo how to fetch the data by defining a resolver
const resolvers = {
  Query: {
    books: () => books, 
    
    getAllBooks: async () => {
      return await books.find();
    }
  }, 
  
  Mutation: {
    createPost: async (root, args, content, info) => {
      const {title, reminders, prom, author} = args.books;
      console.log("this is title: ", title, reminders, prom, author);
      const post = new books({title, reminders, prom, author});
      await post.save();
      return post;
    }
  }
};

module.exports = resolvers;