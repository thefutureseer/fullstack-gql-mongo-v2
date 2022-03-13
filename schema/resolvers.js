const { findOneAndUpdate } = require('../models/Book');
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
      // let {_id, author, title} = args.books;
      let post = books.create( args.books )
      .then(result=>{console.log(result); return {...post._doc}})
      .catch(err=>{console.log(err); throw err});

      return post;
    },    
    deleteOnePost: async (root, {_id}, context, info) => {
     return await books.findOneAndDelete(
        {_id:_id },
        {$pull: {_id}}
      );
    },
    //update a single post with mongo method
    updateOnePost: async (root, args, context, info) => {
      const {_id, author} = args.books;
      return books.findOneAndUpdate(
        //filter to find the 
        {_id:_id},
        //replacement
        {author},
        {returnNewDocument: true}
      );
    }


  }
};

module.exports = resolvers;