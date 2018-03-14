const mongoose = require('mongoose');
const dbURI = 'mongodb://mirva:salasana@ds012198.mlab.com:12198/dogdb';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
console.log('Mongoose connected to ${dbURI}');
}
);

mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error:', err);
    }
    );

    mongoose.connection.on('disconnected', function() {
        console.log('Mongoose disconnected');
        }
        );


require('./appSchemas');