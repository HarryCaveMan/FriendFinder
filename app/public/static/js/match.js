match = function(data){
	let you = data[data.length-1];
	let them = data.slice(0,(data.length-1));
    let sums = [];
    console.log(them[0].data);
    for(let i=0 ; i<them.length ; i++){
    	sums.push(0);
    	for(let j=0 ; j<you.data.length ; j++){
           sums[i]+=Math.abs(you.data[j]-them[i].data[j]);
    	}
       console.log(sums);
       return them[sums.indexOf(Math.min(sums))];
    }
}