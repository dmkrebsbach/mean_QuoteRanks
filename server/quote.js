const mongoose = require("mongoose");

const QuoteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true, //use backend validation to prevent bad entries
        minlength: 10
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
        required: true,
        minlength: 3
    },
    votes: Number
});

module.exports = mongoose.model("Quote", QuoteSchema);