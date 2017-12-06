const books= [];
let id = 0;

const create = (req, res, next)=> {
    create: ( req, res ) => {
      const { title, author } = req.body;
      books.push( { id, title, author } );
      id++;
      res.status(200).send( books );
    },

const read = (req, res, next)=> {
    res.status(200).send( books );
  },


const update = (req, res, next)=> {
    const updateID = req.params.id;
    let index = books.findIndex( book => book.id == updateID );


    books[ index ] = {
        id: books[ index ].id,
        title: req.body.title || books[ index ].title,
        author: req.body.author || books[ index ].author
      };
  
      res.status(200).send( books );
    },

const destroy = (req, res, next)=>{
    const deleteID = req.params.id;
    bookID = books.findIndex( book => book.id == deleteID );
    books.splice( bookID, 1 );
    res.status(200).send( books );
  }
};

// module.exports = function sumefunc(){}


// module.exports = {
//     getBooks(req, res, next)
// };  most comon way


module.exports = {
    create,
    read,
    update,
    destroy
};

