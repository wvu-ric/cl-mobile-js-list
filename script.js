//Josh Matheny "list" Assignment

// Variable created to store input of shopping items
var input;
// Variable created to store entire list of shopping items
var items = [];
// Indexing or counting variable to help store each item as a string in individual elements of an array
var i=0;

// While loop used to add each shopping item input to the overall shopping list
while(input != ""){
	//Prompt that allows user to input an item
	input = prompt("Enter item");
	//Line that stores each input item input by defining them as individual elements of the "items" array
	items[i] = input;

	//Index or counter
	i=i+1;
}

//When the previous while loop ended with typing "" into that input, that was added as the last entry to the items array
//I used "pop" to remove that unneeded element from the array
l = items.length-1;
items[l] = "?";
removed = items.pop();

// Variable created to store the polished itemized list with items labeled with numbers
var toDisplay = [];
//Probably could have put all of this together in one "while" loop
//but just stuck with the structure that was provided

// Another counting variable to run the second "while" loop
var count = 0;
// Since array elements start at 0, a second counter was use to number the items starting with 1
var countplus = 0;

// While loop used to label each item as item 1, 2, 3, etc...and create the polished shopping list
while(count < items.length){
	//Counter for "Number of Items" (So it doesn't start with 0, first element in an array)
	countplus = count+1;

	//line that combines the number of the item listed with the actual name of the item as a string
	toDisplay[count] = countplus.toString() +". " + items[count];

	//Counter used for addressing the elements of the items array that stored the list of items
	count++;
}

alert(toDisplay);
