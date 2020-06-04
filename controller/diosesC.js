let mongoose = require('mongoose');

let Dioses = require('../models/dioses');

let DiosesController = {};

DiosesController.list = (req, res)=>{
    Dioses.find({})
    .limit(15)
    .skip(0)
    .exec((err, pintor)=>{
        if(err){
            console.log('Error ' + err)
        }
        res.render('../views/index', {
            dioses: dios,
            titulo: "Lista de dioses",
            year: new Date().getDate()
        })
    })
};

module.exports = DiosesController;