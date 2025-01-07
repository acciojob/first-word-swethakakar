function firstWord(s) {
  // your code here
	if(s==null || s=='')
	{
		console.log(s);
	}
	s=s.trimStart()
	let sarr=[];
	sarr=s.split(' ');
	let ouput=sarr[0];
	//console.log(ouput);
	return ouput;

	

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
