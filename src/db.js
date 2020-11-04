const MongoClient = require('mongodb').MongoClient;
const populate = require('./populateDb');

const client = new MongoClient(getMongoUri(), { useUnifiedTopology: true });
module.exports = { client };

client
  .connect()
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.error('Error on connecting to MongoDB server', error))
  .then(() => {
    const posts = client.db('app').collection('posts');
    module.exports.posts = posts;
    populate(posts);
  });
