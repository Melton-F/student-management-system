const mongoose = require('mongoose')
const app = require('./app')


//mongoose connection

mongoose.connect("mongodb://localhost:27017/schools");
mongoose.connection
  .once("open", () => {
    console.log("DB connected");
  })
  .on("error", (error)=> {
    console.log("error is:", error);
  });

const PORT = 3000
app.listen(PORT, (req, res)=>{
    console.log(`its running on port: ${PORT}`);
});