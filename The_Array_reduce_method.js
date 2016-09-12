//Let's use our new reduce function to isolate the largest value in an array of ratings.
function() {
	var ratings = [2,3,1,4,5];

	return ratings.
	  reduce(function(acc, curr) {
		if(acc > curr) {
		  return acc;
		}
		else {
		  return curr;
		}
	  });
}
