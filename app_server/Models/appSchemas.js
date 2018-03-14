const mongoose = require('mongoose');

const bigdogsSchema = new mongoose.Schema({dog:String, name:String})
const pugsSchema = new mongoose.Schema({dog:String, name:String});
const rulesSchema = new mongoose.Schema({number:String, term:String});

mongoose.model('bigdogs', bigdogsSchema);
mongoose.model('pugs', pugsSchema);
mongoose.model('rules', rulesSchema);