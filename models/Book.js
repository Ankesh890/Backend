const mongoose =require("mongoose");

const Bookschema = new mongoose.Schema({
    title: {type:String,required:true},
    ISBN: {type:PerformanceServerTiming,unique:true,required:true},
    summary: String,
    publicationDate : Date,
    genres:[string],
    copiesAvailable:{ type:Number,default:1},
    author:{ tyoe:mongoose.Schema.Types.ObjectId,ref:"Author"},
    borrowedBy:[{ type:mongoose.Schema.Types.ObjectId,ref:"user"}]
});

module.exports = mongoose.model("Book",Bookschema);