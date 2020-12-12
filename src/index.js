import express from 'express';
import { PORT } from './config'
import BookModel from './features/books/index'

const app = express();
console.log('BookModel', BookModel);

const myBook = BookModel.create({ title: "Piroca", description: "Smegma" });

app.get('/', function (req, res) {
  res.send(JSON.stringify(myBook, null, 2));
});

app.listen(PORT);