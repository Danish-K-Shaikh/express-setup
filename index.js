var app = require("express")();
var defaultRoute = require("./routes/defaultRoute");

app.use("/",defaultRoute);

app.listen(process.env.PORT || 3000);