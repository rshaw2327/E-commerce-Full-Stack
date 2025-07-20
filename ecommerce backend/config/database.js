const { default: mongoose } = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(
     process.env.DB_URI
    )
    .then((data) => {
      console.log(`mongodb connected with the server ${data.connection.host} `);
    });
};

module.exports=connectDatabase