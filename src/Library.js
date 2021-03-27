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
  var bookAdded =[];
  bookAdded.pop(library.shelves.fantasy[0]);
};
return bookAdded


module.exports = {
  createLibrary,
  addBook,// cre,ateLibrary,
  // addBook,
  // checkoutBook
};
