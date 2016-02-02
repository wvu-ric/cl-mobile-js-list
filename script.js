var input;
var items = [];

while(input != ""){
	input = prompt("Enter item");
	items.push(input);
}

var count = 0;
var toDisplay = "";
while(count < items.length){
	count++;
	}
		//alert(count + 1 + ". " + items[count]);

alert(items.join('\n'));


//items.join('\n')
