const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        minlength: 3,
        required: true
    },
    lastName: {
        type: String,
        minlength: 3,
        required: true
    },
    quotes: [{type: mongoose.Schema.Types.ObjectId, ref: "Quote"}]
});

module.exports = mongoose.model("Author", AuthorSchema);