function createLibrary(name, shelves){
  var library ={
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library
};

function addBook(library,book){
  library.shelves[book.genre].push(book);
};


module.exports = {
  createLibrary,
  addBook,// cre,ateLibrary,
  // addBook,
  // checkoutBook
};
