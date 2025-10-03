# JavaScript Array Practice Exercise

## Overview
A JavaScript exercise to practice array fundamentals by managing a grocery shopping list. Complete 10 tasks plus a bonus challenge to learn array creation, indexing, methods (`.push()`, `.pop()`, `.slice()`), nested arrays, and `const` mutability.

## Exercise Description
Manage a grocery list by:
- Creating and modifying arrays.
- Accessing elements with bracket notation.
- Using array methods (`.push()`, `.pop()`, `.slice()`).
- Working with nested arrays.
- Understanding array mutability with `const` and functions.




## Tasks

1. Create an array called groceryList that contains the following items: 'milk', 'bread', 'eggs', and 'apples'.
2. Use bracket notation to print the first item in groceryList to the console.
3. Replace 'bread' with 'bananas' using its index.
4. Print the number of items in groceryList using the .length property.
5. Use the .push() method to add 'butter' to the end of groceryList.
6. Use the .pop() method to remove the last item from groceryList and store it in a variable called removedItem. Print removedItem to the console.
7. Create a nested array called shoppingTrip where the first element is your groceryList array and the second element is an array of numbers representing quantities: [2, 1, 3, 4] (e.g., 2 milks, 1 bananas, 3 eggs, 4 apples).
8. Use chained bracket notation to print the quantity of eggs (the third item in the quantities array) from shoppingTrip.
9. Write a function called addUrgentItem that takes an array and an item as parameters and uses .push() to add the item to the array. Call the function to add 'ice cream' to groceryList. Print groceryList to verify the change persists outside the function.
10. Declare a new array called frozenItems with const and initialize it with ['ice cream', 'pizza']. Use a method like .push() to add 'peas' to frozenItems. Then, try to reassign frozenItems to a new array ['cake']. What happens? (Comment your observation in the code.)
