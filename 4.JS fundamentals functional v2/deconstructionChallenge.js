const {name, weapon, room} = {"name": "Rusty", "room":"kitchen", "weapon":"candlestick"};
console.log(name);
console.log(weapon);
console.log(room);

//Destructure this nested data structure into two variables with the strings 'red' and 'orange'.
var suspects = [
    {
        name: "Rusty",
        color: "orange"
    }, {
        name: "Miss Scarlet",
        color: "red"
    }
]

//deconstruct as array:

let [color1, color2] = [suspects[0].color, suspects[1].color]
console.log(color1, color2);

//deconstruct as array of obj??:
let [{color: firstColor}, {color: secondColor}] = suspects;
console.log(firstColor, secondColor);
