const mongoose=require("mongoose")

const database="jokes";

mongoose.connect("mongodb://localhost/"+ database, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Established a connection to the database"))
        .catch((err)=>console.log(err))