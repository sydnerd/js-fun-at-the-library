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

function addBook(library,book) {
  library.shelves[book.genre].push(book);
};

function checkoutBook(library, title, genre) {
  for(var i =0; i < library.shelves[genre].length; i++){
    var bookName =library.shelves[genre][i];
    if(bookName.title === title){
      library.shelves[genre].splice(genre[i],1);
      return `You have now checked out ${title} from the ${library.name}`;
    };
  }; return `Sorry, there are currently no copies of ${title} available at the ${library.name}`;

  };



module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
}
