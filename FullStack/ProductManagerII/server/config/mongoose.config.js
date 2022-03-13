const mongoose = require("mongoose");

const productDB = "productDB";

mongoose.connect(`mongodb://localhost/${productDB}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log("Established a connection to the database"))
.catch(err => console.log(err))
