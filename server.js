const express = require("express");
const expbhs = require("express-handlebars");
const routes = require("./controllers/burgers_controller");

//Setting up express server
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({extended: true }));
app.use(express.json());

//Setting up express handlebars
app.engine("handlebars", expbhs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import routes to give the server access to them
    //TODO
app.use(routes);

app.listen(PORT, function(){
    console.log(`App is now listening at localhost: ${PORT}`);
})