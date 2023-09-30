const express = require("express");
const app = express();
const connection = require("./database/connection");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

// View Engine
app.set('view engine', 'ejs');


// Static
app.use(express.static('public'));


// Urlencoded
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Database
connection
    .authenticate()
    .then(() => {
        console.log("Connection made successfully!")
    }).catch((error) => {
        console.log(error);
    });



app.use("/", categoriesController);
app.use("/", articlesController);

app.get("/", (req, res) => {
    Article.findAll().then(articles => {
        res.render("index", {articles: articles});
    });
});


app.listen(8080, () => {
    console.log("The server is running!")
});