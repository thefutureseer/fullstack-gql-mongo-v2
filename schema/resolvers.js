const books = require('../models/Book')

//tell apollo how to fetch the data by defining a resolver
const resolvers = {
  Query: {
    books: () => books, 
    
    getAllBooks: async () => {
      return await books.find();
    },

    getOne: async (root, {_id}) => {
      return await books.findById({_id}).populate('_id')
    }

  }, 

  Mutation: {
    createPost: (root, args, context) => {
      let {_id, author} = args.books;
      console.log("this is id & author: ",_id, author);
      let post = books.create({_id, author})
      .then(result=>{console.log(result); return {...post._doc}})
      .catch(err=>{console.log(err); throw err});

      return post;
    },    

    
    deleteOnePost: async (parent, {_id}, context, info) => {
     return await books.findOneAndDelete(
        {_id:_id },
        {$pull: {_id}}
      );
    },

  }
};

module.exports = resolvers;