let noStop = 0;

function carNoStop(){
	noStop++;
	console.log(noStop);
}

carNoStop();
carNoStop();

function callFunc(f){
	var f0, f1;
	f0=f(0);
	f1=f(1);
	return [f0,f0,f1,f1];
}