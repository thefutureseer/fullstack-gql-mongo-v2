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
      const {title, author} = args.books;
      console.log("this is title: ", title, author);
      const post = new books({title, author});
      await post.save()
      // .then(result=>console.log(result) return {...post._doc})
      //.catch(err=>console.log(err) throw err);
      return post;
    }
  }
};

module.exports = resolvers;