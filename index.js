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

// Check authentication
function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    console.log("Checking authentication success:", req.session);
    next();
  } else {
    console.log("Checking authentication failed:", req.session);
    res.redirect("/Login"); // Redirect to login if not authenticated
  }
}
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

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


app.get("/", (req,res) => res.redirect("/Login"));
app.use("/Homepage", ensureAuthenticated, require("./routes/pageRouter"));
app.use("/Search", ensureAuthenticated, require("./routes/searchRouter"));
app.use("/Activity", ensureAuthenticated, require("./routes/activityRouter"));
app.use("/Profile", ensureAuthenticated, require("./routes/profileRouter"));
app.use("/Login", require("./routes/loginRouter"));
app.use("/CreateAccount", require("./routes/createRouter"));



app.listen(port, () => console.log(`listening on port ${port}`));