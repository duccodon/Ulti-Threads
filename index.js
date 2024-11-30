const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const expressHbs = require("express-handlebars");

app.use(express.static(__dirname + "/public"));

app.engine(
    'hbs', 
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
        helpers: {
            eq: function (a, b) {
              return a === b; // Return true if a and b are strictly equal
            }
          }
    })
);
app.set("view engine", "hbs");

app.get("/", (req,res) => res.redirect("/login"));
app.use("/Homepage", require("./routes/pageRouter"));
app.use("/Search", require("./routes/searchRouter"));
app.use("/Activity", require("./routes/activityRouter"));
app.use("/Profile", require("./routes/profileRouter"));
app.use("/Login", require("./routes/loginRouter"));
app.use("/CreateAccount", require("./routes/createRouter"));

app.listen(port, () => console.log(`listening on port ${port}`));