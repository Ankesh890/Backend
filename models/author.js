const mongoose =require("mongoose");

const Authorschema = new mongoose.Schema({
    name: { type:String,required:true},
    biography: String,
    dateofBirth: Date,
    nationality: String,
    books : [{ type: mongoose.Schema.Types.ObjectId, ref:"Book"}],
});

module.exports = mongoose.model("Author",Authorschema);