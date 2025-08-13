const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
dotenv.config();


// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});


// Requst body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Set view engine
app.set('view engine', 'ejs');


// Set Static Folder
app.use(express.static(Path.join(__dirname, 'public')));


// Parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));


// Routes



// Error handling
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});