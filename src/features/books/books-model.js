const BookModel = ({ DB, Books }) => {

  const create = ({ title, description }) => {
    const newBook = Books.newBook({ title, description })

    DB.create(newBook);
    return newBook
  };

  // return function () {
  //   return Object.create({
  //     ...DB,
  //   })
  // };

  return { create };
}

export default BookModel;
