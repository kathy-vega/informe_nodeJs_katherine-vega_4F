const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let DiosesSchema = new Schema({
    name:{
        tipe: String,
        required: [true, 'Se necesita el nombre']
    },

    style:{
        tipe: String,
        required: [true, 'Se necesita la corriente']
    },

    national:{
        tipe: String
    },

    paint:{
        tipe: String
    }
});

module.exports = mongoose.model('dioses', DiosesSchema);