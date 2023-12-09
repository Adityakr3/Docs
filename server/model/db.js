const mongoose = require('mongoose');
mongoose
    .connect('mongodb+srv://Adi123:d8ai0xtnAB1ZOOn4@cluster0.2qr95tv.mongodb.net/?retryWrites=true&w=majority')
    .then(() => { console.log('Db connected') })
    .catch(() => { console.log(err) });