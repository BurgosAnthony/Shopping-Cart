const Product = require('../models/product');

const mongoose = require('mongoose');

// This connects to mongodb. Copy/Past for future seeds & projects 
// Change the session name each time (shopping)
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true });

const products = [
    new Product({
        imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiles.tofugu.com%2Farticles%2Freviews%2F2016-07-19-japan-crate%2Fheader-1280x.jpg&f=1&nofb=1',
        title: 'Japanese Candy',
        description: 'Buy these Japanese sweets or pay a monthly subscription',
        price: 10
    }),
    new Product({
        imagePath: 'https://guidable.co/wp-content/uploads/2019/01/IMG_4888-1024x498.jpg',
        title: 'Japanese Chocolate Variety',
        description: 'Buy these Japanese chocolates. Chocolate is random each month',
        price: 15
    }),
    new Product({
        imagePath: 'https://guidable.co/wp-content/uploads/2019/01/IMG_4246-1024x332.jpg',
        title: 'Japanese Cookie Variety',
        description: 'Buy these Japanese cookies. Two packs only',
        price: 6
    }),
    new Product({
        imagePath: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jA2lxO_9VW6PSFm2Pjx-DAHaHa%26pid%3DApi&f=1',
        title: 'Mystery Box',
        description: 'Take a chance and see what you get. Guranteed to be Japanese candy, chocolate, cookie, and a mix of these treats',
        price: 9
    }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}