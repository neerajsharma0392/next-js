import {MongoClient} from 'mongodb';


export async function connectToMonogDatabase(){
const client= await MongoClient.connect("mongodb://127.0.0.1:27017/organization")
return client;
}