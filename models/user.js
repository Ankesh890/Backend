const mongoose =require("mongoose");
const bcrypt =require("bcryptjs");

const userschema =  new mongoose.Schema({
    username: {type: String,unique: true,required: true},
   password : {type: String,required: true},
    role: {type: String,enum: ["Admin","Member"], default: "Member"},
   name : {type: String,required: true},
   email: {type: String,required: true,unique: true},
    borrowedBooks: [{ type:mongoose.Schema.Types.ObjectId, ref:"Book"}],
});

userschema.pre("save,async function (next") {
    if (! this.isModified("password")) return next ();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

module.exports = mongoose.model("User",userschema);