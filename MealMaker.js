// create the menu object and its properties
const menu = {
    _meal : '',
    _price : 0,
// set methods
 set meal (mealToCheck) {
    if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
    } else {
        console.log('Meal must be a string!');
    }
},
  set price (priceToCheck) {
    if (typeof priceToCheck === 'number') {
this._price = priceToCheck;
    } else {
        console.log('price must be a number!');
   }
},
get todaysSpecial() {
    if (this._meal && this._price) {
        return `Today's' Special is ${this._meal} for $${this._price}!`;
    } else {
        return 'Meal or price was not set correctly!';
    }
}
};

menu._meal = 42;
menu._price = 'twenty';

menu.meal = 'spaghetti';
menu.price = 5;

console.log(menu.todaysSpecial);