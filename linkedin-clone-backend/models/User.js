//models
const mongoose= require ("mongoose");

//schema
//schema to models 
const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,

    },
    password:{
        type:String,
        required:true,
    }, 
    experiences:[{
        type : String,
    },
],
    project:[{
        type:String,
    },
],
    skills:[{
        type:String,
    }],

});

const User=mongoose.model("User",UserSchema);
module.exports=User;
