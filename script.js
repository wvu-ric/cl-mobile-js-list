var input;
var items = [];
var count = 0;

while(input != ""){
	input = prompt("Enter item");
	items.push(input);
}
items.pop(); // remove final null string from array

count = 0;
var toDisplay = "";
while(count < items.length){
	toDisplay += "" + (count + 1) + ". " + items[count] + "\n";
	count++;
}
alert(toDisplay);
