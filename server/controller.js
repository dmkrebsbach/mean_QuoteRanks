const mongoose = require("mongoose");
const Author = require("./author"); //requires the author.js file in the same server Folder
const Quote = require("./quote"); //requires the quote.js file in the same server Folder

module.exports = {
    getAuthors: (req, res)=>{
        Author.find()
            .then((authors)=>{
                return res.json(authors);
            })
            .catch((err)=>{
                return res.json(err);
            });
    },

    createAuthor: (req, res)=>{
        Author.create(req.body)
            .then((author)=>{
                console.log("Author Created");
                return res.json(author);
            })
            .catch((err)=>{
                console.log("Error in Author Controller Creation");
                return res.json(err);
            });
    },

    getAuthor: (req, res)=>{
        Author.findOne({_id: req.params.id})
            .populate("quotes")
            .then((author)=>{
                return res.json(author);
            })
            .catch((err)=>{
                return res.json(err);
            });
    },

    updateAuthor: (req, res)=>{
        Author.updateOne({_id: req.params.id}, req.body, {runValidators: true})
            .then((author)=>{
                console.log("Author Updated");
                return res.json(author);
            })
            .catch((err)=>{
                console.log("Error in Author Controller Update");
                return res.json(err);
            });
    },

    deleteAuthor: (req, res)=>{
        Author.remove({_id: req.params.id})
            .then((author)=>{
                return res.json(author);
            })
            .catch((err)=>{
                return res.json(err);
            })
    },

    createQuote: (req, res)=>{
        
        Author.findOne({_id: req.body.author})
            .then((author)=>{
                let newQuote = new Quote();
                newQuote.content = req.body.content;
                newQuote.author = author._id;
                newQuote.votes = 0;
                Quote.create(newQuote)
                    .then((quote)=>{
                        console.log("ready to push quote to author quotes array");
                        console.log(quote.content);
                        author.quotes.push(quote._id);
                        console.log("quote pushed to array");
                        author.save();
                        return res.json(quote);
                    })
                    .catch((err)=>{
                        console.log("error in pushing quote to array");
                        return res.json(err);
                    })
            })
            .catch((err)=>{
                console.log("error Quote Creation on Server Side");
                return res.json(err);
            });
    },

    updateQuote: (req, res)=>{
        Quote.update({_id: req.params.id}, req.body, {runValidators: true})
            .then((quote)=>{
                return res.json(quote);
            })
            .catch((err)=>{
                return res.json(err);
            });
    },

    deleteQuote: (req, res)=>{
        Quote.remove({_id: req.params.id})
            .then((quote)=>{
                return res.json(quote);
            })
            .catch((err)=>{
                return res.json(err);
            });
    }
}