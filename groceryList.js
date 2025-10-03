// List of tasks to create grocery lists according to provided rules

//task 1
let groceryList = ['milk', 'bread', 'eggs', 'apples'];

// task 2
console.log(groceryList[0]);

// task 3
groceryList[1] = 'bananas';
console.log(groceryList);

// task 4
console.log(groceryList.length);

// task 5
groceryList.push('butter');
console.log(groceryList);

// task 6  
let removedItem = groceryList.pop();
console.log(removedItem);

// task 7
let shoppingTrip = [groceryList, [2, 1, 3, 4]];

// task 8
console.log(shoppingTrip[1][2]);

// task 9
function addUrgentItem(array, item) {
    array.push(item);
}
addUrgentItem(groceryList, 'ice cream');
console.log(groceryList);

// task 10
const frozenItems = ['ice cream', 'pizza'];
frozenItems.push('peas');

// frozenItems = ['cake']; this causes an error because you can't reassign a constant variable
console.log(frozenItems);