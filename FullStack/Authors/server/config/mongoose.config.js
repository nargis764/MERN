const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log(`Connected to the database called ${process.env.DB_NAME}`);
})
.catch((err) => {
    console.log(`There was a problem conenncting to port ${process.env.DB_NAME}`)
})