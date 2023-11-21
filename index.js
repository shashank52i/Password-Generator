const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


 let generateEl = document.getElementById("generate-el");
let firstResEl = document.getElementById("firstRes-el");
let secondResEl = document.getElementById("secondRes-el");



generateEl.addEventListener("click", function () {
     let resultString = " ";
    for (let i = 0; i < 7; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        resultString += characters[randomIndexOne]; 
        firstResEl.innerText = resultString;
    }
         let resultSecString = "";
    for (let i = 0; i < 7; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        resultSecString += characters[randomIndexOne]; 
        secondResEl.innerText =resultSecString;
    }

});
