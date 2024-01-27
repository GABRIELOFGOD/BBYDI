const express = require('express');
const blogRouter = require('./routes/blog.router');
const mySqlConnection = require('./config/mySql.config');

// ============= CONFIGURATION ================= //
require('dotenv').config();
const app = express();
app.use(express.json())

mySqlConnection.con.connect((error) => {
    if(error) return console.log('error connecting to the database', error);
    console.log('Database connected successfully')
})

// ============== MIDDLEWARES =================== //
const PORT = process.env.PORT || 3800;

// =============== CONFIGURING URL ENDPOINTS =================== //
app.use('/blog', blogRouter)

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})