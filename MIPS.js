const instructions = 1000000000;
var a = 0;

function f(){
	//Simulate 10 instructions:
	a=1;
	a=2;
	a=3;
	a=4;
	a=5;
	a=6;
	a=7;
	a=8;
	a=9;
	a=0;
	}


//measure process start time.
let d1 = new Date();
let starttime = d1.getTime();

//Do 1,000,000,000 instructions in this for loop process.
for (let i = 0; i < (instructions/10); i++) {
	f(); //Do 10 instructions at each loop.
	}

//measure process end time.	
let d2 = new Date();
let endtime = d2.getTime();

//calculate process time.
let diftime = endtime - starttime;

//calculate process Mega Instructions per Second.
let mips = (instructions/1000000)/(diftime/1000);
	
console.log('Single threaded Node.js process MIPS:');
console.log(mips);
