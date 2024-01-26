const express = require('express');
const blogRouter = require('./routes/blog.router');
const mySqlConnection = require('./config/mySql.config');

// ============= CONFIGURATION ================= //
require('dotenv').config();
const app = express();
mySqlConnection()

// ============== MIDDLEWARES =================== //
const PORT = process.env.PORT || 3800;

// =============== CONFIGURING URL ENDPOINTS =================== //
app.use('/blog', blogRouter)

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`);
})