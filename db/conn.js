const mongoose = require('mongoose')

async function main() {
    
    try {
        await mongoose.connect('mongodb+srv://kvictor1711:<senha>@cluster0.emasswd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("kaio");
    } catch (error) {
        console.log("erro" + error);
    }
    
  
}



module.exports = main