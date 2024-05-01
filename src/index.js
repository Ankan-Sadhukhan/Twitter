const express = require('express');
const app = express();

const connectDB = require('./config/database');
const Tweet = require('./models/tweet');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, async() => {
    console.log('Server is running on port 3000');

    await connectDB();
    console.log('Database connected');

    const tweet = await Tweet.create({
        content: 'This is a new tweet',
    
    });

});