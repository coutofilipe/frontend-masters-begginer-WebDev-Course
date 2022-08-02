//LOOPING WITH_.each
function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak() { log("my name is ${name}"); }
    };
};

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

//_.each differs from .forEach(), because it takes a lis and an iterator as arguments;
// forEach() is a method that is called on an array;
// _.each(suspects, function (name) {
//     suspectsList.push(CreateSuspectObjects(name));
// });


var rooms = ['observatory', 'ballroom', 'library'];
var logger = function (val) {
    console.log(val);
};


//_.each(list,iterator)
// Complete the rest of this function so that it works as described in the previous slides:
const _ = {}
_.each = function(list, callback) {
    //
    if(Array.isArray(list)){
        //loop through the list
        for (let i = 0; i < list.length; i++) {
            //call the callback with a list item 
                //arguments here have to be value: list[i], index: i, and the list: list
            callback(list[i], i, list);
        }
            
    } else {
        for (let key in list) {
            callback(list[key], key, list);
        }
   }
   //celebrate
}
_.each(['sally', 'georgie', 'porgie'], function(name, i){
    if(list[i +1]) {
        console.log(name, 'is younger than', list[i +1] );    
    } else {
        console.log(name, 'is the oldest');
    }
})

