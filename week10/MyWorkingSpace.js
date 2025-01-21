// NAME: junhyung-kim
// DATE: 2024-05-13
// WEEK:10
// EXERCISE/ASSIGNMENT: String 



function Exercise1() {
	let text = "\"'My name is Bond.James Bond',he said to the bartender,'Don't forget my martini is shaken, not stirred.'\"";
	print(text);
}
	
function Exercise2() {
	print("***\t***\n\t***");
}
	
function Exercise3(){
	for (let x =1; x<=12; x++){
		let template = `${x} X 7 = ${x * 7}`;
		print(template);
	}
}

function Exercise4() { 
 let text = "Harry";
 
 for(i=0; i<=4; i++){
	 print(text[i]);
 }
}
			
function Exercise5() {
	let text1 = prompt("enter your first sentence");
	let choose_case = prompt("please choose your case type: uppercase/lowercase");
		if(choose_case == "uppercase"){
			text1 = text1.toUpperCase();
			print(text1.toUpperCase());
		} 
		else if(choose_case == "lowercase"){
				print(text1);
				}
		else{
				print("please check your input");
			}
}




function Exercise6(){
	let text1 = "The quick brown fox";
	let extraction1 = text1.substring(4,9);
	let extraction2 = text1.substring(10,15);
	let extraction3 = text1.substring(16,19);
	print(extraction1);
	print(extraction2);
	print(extraction3);

}

function Exercise7(){
	let text1 = "The quick brown fox";
	print(text1.indexOf("quick"));
	print(text1.indexOf("brown"));
	print(text1.indexOf("fox"));
}

function Exercise8() {
	let text1 = "\"'My name is Bond.James Bond',he said to the bartender,'Don't forget my martini is shaken, not stirred.'\"";
		text1 = text1.replace("Bond","junhyung");
		text1 = text1.replace("James","kim");
		text1 = text1.replace('Bond','junhyung');
		print(text1);
}

function Exercise9(){
	let text1 =  "\"How much wood would a woodchuck chuck if a woodchuck could chuck wood?\"";
	
	let index = text1.indexOf("wood");
	
	if(index!==-1){
	   text1 = text1.replaceAll("wood", "stone");
	}
	print(text1);
}

function Exercise10() {
	let text1 = "\"The quick brown fox\"";
	text1 = text1.replace("The", "the");
	text1 = text1.replace("quick","QUICK");
	text1 = text1.replace("fox", "FOX");
	print(text1);
}


function Exercise11() {
	let text1 = prompt("input your sentenacne");
	let text2 ="";
	
	while(text1.length>0){
		let randomNumber = Math.floor(Math.random()*text1.length);
		text2 += text1.charAt(randomNumber);
		text1 = text1.substring(0,randomNumber) + text1.substring(randomNumber + 1);	
	}
	 print(text2);
}
function Exercise12() {
	let text1 = prompt("input your sentenacne");
	let n = getRandom(text1.length -1);
	let i = getRandom(text1.length -1);
	
	for(let j=0; j<text1.length; j++){
	 text1 = text1.replaceAll(text1[n-1],text1[i-1]);
 	 text1 = text1.replaceAll(text1[n], text1[i]); 
	 text1 = text1.replaceAll(text1[n+1], text1[i+1]);
	}
	print(text1);
}


//Clear working space
function clearPrintSpace() {
	clearAll();
}
