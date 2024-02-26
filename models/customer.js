const mongoose=require('mongoose');

const customerSchema=mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

const Customers=mongoose.model('Customer',customerSchema);

module.exports=Customers;