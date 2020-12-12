import mongodb from 'mongodb';
import { MONGO_DB } from '../config';
import makeLibraryDB from './data-access';

const { MongoClient } = mongodb;
const url = MONGO_DB;
const dbName = 'it_library';
const client = new MongoClient(url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export async function makeDb() {
  if (!client.isConnected()) {
    await client.connect();
  }
  return client.db(dbName);
}

const libraryDB = makeLibraryDB({ makeDb });
export default libraryDB;