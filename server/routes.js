const controller = require("./controller"); //links to the controller file in the server folder

module.exports = function(app){
    app.get("/authors", controller.getAuthors);
    app.post("/authors", controller.createAuthor);
    app.get("/authors/:id", controller.getAuthor);
    app.put("/authors/:id", controller.updateAuthor);
    app.delete("/authors/:id", controller.deleteAuthor);
    
    app.post("/quotes", controller.createQuote);
    app.put("/quotes/:id", controller.updateQuote);
    app.delete("/quotes/:id", controller.deleteQuote);
}

// each "model" should have it's own set of RestfulAPI routes that follow standard conventions.