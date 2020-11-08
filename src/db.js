const { MongoClient } = require("mongodb");
const mongoose = require('mongoose');
const express = require('express');

const getMongoUri = () => {
  // Datele din process.env sunt cele din fișierul .env, dacă nu există, trebuie creat după modelul .env.example
  const user = encodeURIComponent(process.env.mongoUser);
  const pass = encodeURIComponent(process.env.mongoPass);
  const url = process.env.mongoUrl;
  return `mongodb+srv://${user}:${pass}@${url}`;
};

// Replace the uri string with your MongoDB deployment's connection string.
const uri = getMongoUri();

//CONNECT WITH MONGOOSE

// mongoose.connect(uri, {useNewUrlParser:true});
// const con = mongoose.connection

// con.on('open', ()=>{
//     console.log('Connected to DB with mongoose');
// });



// CONNECT WITH MONGODB

// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db('sample_mflix');
//     const collection = database.collection('movies');

//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await collection.findOne(query);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// vom stoca datele în memorie, prin obiectul local data
// pentru a interacționa cu acest obiect, vom crea metodele CRUD
const data = {
  posts: [],
};
let counter = 0;

const add = (table, item) => {
  // create
  item.id = counter++;
  data[table].push(item);
  return item;
};

const getBy = (table, key, value) => { // read by key
    // @todo: scrie funcționalitatea
   const item =  data[table].find(dataItem => dataItem[key]===value);
   console.log(item);
   return item;
}; 

const get = (table, id) => { // read
    // @todo: scrie funcționalitatea
   return getBy(table, 'id', id);
};

const set = (table, updatedItem) => { // update
    // @todo: scrie funcționalitatea
    const itemIndex =  data[table].findIndex(dataItem => dataItem.id===updatedItem.id);
    if (itemIndex === -1) {
     	if (counter <= updatedItem.id){
    		counter = updatedItem.id+1;
    	}
    	data[table].push(updatedItem);
    	return updatedItem;
    } else {
    	const item = data[table][itemIndex];
    	return item;
    };
};
const remove = (table, id) => { // delete
    // @todo: scrie funcționalitatea
    const itemIndex =  data[table].findIndex(dataItem => dataItem.id===id);
    data[table].splice(itemIndex,1);
    // delete data[table][itemIndex];
    return itemIndex === -1 ? false : true;
};

const getAll = (table) => {
  return data[table].slice(); // întoarcem o copie al array-ului, ca să nu-l modifice cineva întâmplător
};
const removeAll = (table) => {
  data[table] = [];
};

module.exports = {add, get, getBy, set, remove, getAll, removeAll, data};
