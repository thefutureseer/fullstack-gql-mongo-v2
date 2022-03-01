const books = require('../models/Book')

//tell apollo how to fetch the data by defining a resolver
const resolvers = {
  Query: {
    books: () => books, 
    
    getAllBooks: async () => {
      return await books.find();
    }
  }, 


  // Mutation: {
  //   createPost: async (parent, args) => {
  //     const post = await books.create(args);
  //     console.log("this is post in resolver", post)
  //     return post;
  //   },
  
  Mutation: {
    createPost: async (root, args) => {
      let {_id, author} = args.books;
      console.log("this is id & author: ",_id, author);
      let post = books.create({_id, author})
      .then(result=>{console.log(result); return {...post._doc}})
      .catch(err=>{console.log(err); throw err});
      // post.save();
      return post;
    }
  }
};

module.exports = resolvers;