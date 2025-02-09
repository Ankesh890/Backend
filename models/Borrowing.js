module.exports = mongoose.model("Book",Bookschema);

const Borrowingschema =new mongoose.schema({
    book: {type: mongoose.schema.Types.objectId,ref:"Book",required: true},
    member: {type: mongoose.schema.Types.objectId,ref:"user",required: true},
    borrowDate: {type: date,default: Date.now},
    dueDate: {type: Date,required:true},
    returnDate: Date,
     status: {type:String,enum:["Borrowed","Returned"],default:"Borrowed"},
});

module.exports = mongoose.model("Borrowing",Borrowingschema);