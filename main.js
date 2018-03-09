const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;



//routing for static directories
app.use('/static',express.static(path.join(__dirname+'/app/public/static')));


//routes
require('./app/routing/html_routes.js')(app);
require('./app/routing/api_routes.js')(app);

app.listen(PORT , () => {
	console.log('listening on ' + PORT );
});