const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// This is the connection to mongoose
mongoose.connect("mongodb+srv://fmonkeyrock:1Astonmartin@cluster0.p027e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// the middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  
// The routes 
const routes = require('./routes');
app.use('/api/v1', routes);

// This is to start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
