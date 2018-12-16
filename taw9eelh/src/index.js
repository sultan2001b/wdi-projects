var express = require("express");
const path = require("path");

var bodyParser = require("body-parser");
const db = require("../models");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));
app.use(express.static(path.resolve(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.post("/users", (req, res) => {
//     const { firstName, lastName, email } = req.body;
//     db.User.create({ firstName, lastName, email }).then(u =>
//         res.redirect(`/users/${u.id}`));
// });

// app.get("/users/:id/delete", (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     db.User.findByPk(id)
//         .then(user => user.destroy({ force: true }))
//         .then(() => res.redirect("/users"));
// });

// app.get("/users/:id/edit", (req, res) => {
//     db.User.findByPk(parseInt(req.params.id, 10)).then(user =>
//         res.render("users/edit", { user })
//     );
// });

// app.post("/users/:id", (req, res) => {
//     const id = parseInt(req.params.id, 10);
//     const { firstName, lastName, email } = req.body;
//     db.User.update({ firstName, lastName, email }, { where: { id } }).then(() => {
//         res.redirect(`/users/${id}`);
//     });
// });

// app.get("/users", (req, res) => {
//     db.User.findAll().then(users => res.render("users/index", { users }));
// });
// app.get("/users/:id", (req, res) => {
//     db.User.findByPk(parseInt(req.params.id, 10)).then(user =>
//         res.render("users/show", { user })
//     );
// });
app.get("/", (req, res) => {
  res.render("home/main");
  // res.send("GET request to /home");
  // res.render("pages/dynamic", { name: req.params.name });
});
app.get("/login", (req, res) => {
  res.render("login/login");
});
app.get("/sign_up", (req, res) => {
  res.render("login/sign_up");
});
// app.get("/login", (req, res) => {
//     res.send("GET request to /home");
// });
// app.get("/about", (req, res) => {
//     res.send("GET request to /about");
// });

app.listen(port, () => {
  console.log(`Server running. Visit http://localhost:${port}`);
});
