var friends = require('../data/friends.js');

module.exports = (app) => {
	app.get('/api/friends/:name?/:photo?/:data?',(req,res) => {
		if(req.params.name && req.params.photo && req.params.data){
			friends.push({
				name:req.params.name,
				photo:req.params.photo,
				data:req.params.data.split('').map(x => parseInt(x))
			});
			res.json(friends);
		}else{
            res.json(friends);
		}
	});
}
