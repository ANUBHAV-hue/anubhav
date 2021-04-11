var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Anubhav";
names[3]="shreya";
names[4]="naveen";
names[5]="frank";
names[6]="namir";
names[7]="paula";
names[8]="laura";
names[9]="layla";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
