import bookFactory from './book';
import DB from '../../Model/db'
import BookModel from './books-model'

const Books = bookFactory();
console.log('Books', Books);
export default BookModel({ DB, Books });