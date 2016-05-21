var express = require('express'),
	app = express();

app.use(express.static("public"));

app.listen(3000 || process.env.PORT, function(){
	console.log("Server started");
});