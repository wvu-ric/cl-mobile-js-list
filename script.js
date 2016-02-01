// create variables
var input;
var items = [];
var count = 0;

// while the input is not blank, prompt user to enter an item
while(input != ""){
	input = prompt("Enter item");
// this appends the input into items as a list
	items.push(input);
}

// remove the last item from the array
items.pop();

// create variables
var toDisplay = "";
var numbered;
var numberedList = [];

// while count is less than the item length,
while(count < items.length){
//append number (by adding 1 to the count) and (eg 1. ) to the items and save it as the variable numbered
	numbered =  count+1 + "." + items[count] + "\n";
// this appends the numbered items into an array
 numberedList.push(numbered);
//increment count by 1
		count++;
}

//this converts the array to a string
var numberedString = numberedList.toString();
// removes any commas in the string
toDisplay = numberedString.replace(/,/g, '');

alert(toDisplay);
