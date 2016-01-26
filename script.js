var input;
var items = [];
var count = 0;

while (true){
	input = prompt("Enter item");
	if (input == '') { break;}
	items.push(input)
}


count = 0;
var toDisplay = "";
while(count < items.length){
    toDisplay += (count+1)+'. '+items[count]+'\n';
    count++;
	
}
alert(toDisplay);