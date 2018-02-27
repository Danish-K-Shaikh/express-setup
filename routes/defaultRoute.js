var router = require("express").Router();

router.use("/",function(req,res){
	res.end("this is default route");
})

module.exports = router;