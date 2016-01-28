var input;
var items = [];

while(input != ""){
		input = prompt("Enter item");

		items.push(input);
		}

items.pop();

var toDisplay = "";
for(var i = 0; i < items.length; i++){
		var numberlist = i + 1 + ". ";
		toDisplay += "\n" + numberlist + items[i];


}
alert(toDisplay);
