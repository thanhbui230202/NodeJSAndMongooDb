// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://localhost:27017//f8_education_dev');
//         console.log('Success');
//     } catch (error) {
//         console.error('Fail', error);
//     }
// }

// module.exports = { connect };

//MongoDB connection via mongoose
const mongoose = require("mongoose");
const server = '127.0.0.1:27017'; 
const database = 'f8_education_dev'; 
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

module.exports = new Database();
