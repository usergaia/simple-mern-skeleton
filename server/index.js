const express = require('express')
const connectDB = require('./db.js');
const itemRoute = require('./routes/item.route.js')
const app = express();
const cors = require('cors');

app.use(cors());

//mw
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/items', itemRoute);

app.get('/', async (req,res) => {
    res.send("Hello from server, thank you nodemon")
})


connectDB()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

