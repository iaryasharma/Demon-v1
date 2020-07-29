const mongoose = require('mongoose');

async function connect(){
  console.log('Connecting to Database')
  await mongoose.connect("mongodb+srv://Discord:Harsha@2002@cluster0.yty6i.mongodb.net/Discord?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  console.log('Connected to Database')
  
}

module.exports = connect()