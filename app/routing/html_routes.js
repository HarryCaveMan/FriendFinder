const path = require('path');
module.exports = (app) => {
	app.get('/',(req,res) => {
		res.sendFile(path.join(__dirname+'/../public/views/home.html'));
	});
	app.get('/survey',(req,res) => {
		res.sendFile(path.join(__dirname+'/../public/views/survey.html'));
	});
    
}