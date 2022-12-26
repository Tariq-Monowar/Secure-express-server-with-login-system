const mongoose = require("mongoose");
const config = require('./config');

mongoose.set('strictQuery', true);

mongoose.connect(config.db.url)
.then(() => {
  console.log(`Connected to MongoDB atlas`);
})
.catch((err) => {
  console.error(`Error connecting to MongoDB: ${err.message}`);
  process.exit(1);
});