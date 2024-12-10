const express = require("express");
const session = require('express-session');
const flash = require('connect-flash');
const app = express();
const port = process.env.PORT || 3000;
const expressHbs = require("express-handlebars");

// Flash messages setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());

app.use(express.static(__dirname + "/public"));

app.engine(
    'hbs', 
    expressHbs.engine({
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials",
        extname: "hbs",
        defaultLayout: "layout",
        runtimeOptions: {
          allowProtoPropertiesByDefault: true,
      },
        helpers: {
            eq: function (a, b) {
              return a === b; // Return true if a and b are strictly equal
            },
            formatDate: (date) => {
              return new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
              });
          },
        },
    })
);
app.set("view engine", "hbs");

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req,res) => res.redirect("/login"));
app.use("/Homepage", require("./routes/pageRouter"));
app.use("/Search", require("./routes/searchRouter"));
app.use("/Activity", require("./routes/activityRouter"));
app.use("/Profile", require("./routes/profileRouter"));
app.use("/Login", require("./routes/loginRouter"));
app.use("/CreateAccount", require("./routes/createRouter"));



app.listen(port, () => console.log(`listening on port ${port}`));