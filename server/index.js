const express = require('express');
const cors = require('cors');
require('dotenv').config();
const databaseConnect = require('./db');
const {router }= require('./routers/rootRoutes');
const app = express();

app.use(cors());;
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/',router);
databaseConnect();

const PORT = process.env.PORT;







app.listen(PORT,'0.0.0.0',() => {
    console.log(`Server listening on ${PORT}`);
})
