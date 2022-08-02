const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        }, {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}
//Loop through the suspects array
function forLoopExample() {
    for (let i = 0; i < game.suspects.length; i++) {
        console.log(game.suspects[i]);    
    }
}
forLoopExample();

//Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty
let gameLoop = function() {
    for (let i = 0; i < game.suspects.length; i++) {
        for (const key in game.suspects[i]) {
            if(game.suspects[i][key] === "Rusty") {
                console.log("Guilty");
            } else {
                console.log("Not guilty!");
            }
            }
        }   
    }
gameLoop();