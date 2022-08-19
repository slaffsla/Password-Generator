const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let rect1 = document.getElementById("rectangle1")
let rect2 = document.getElementById("rectangle2")

function generatePass() {
    let pass1=""
    let pass2=""
    for (i=0; i<pwdLength.value; i++) {
        pass1+=fetchChar()
        pass2+=fetchChar()
        rect1.textContent=pass1
        rect2.textContent=pass2       
    }
}
function fetchChar() {
    let char = characters[Math.floor(Math.random()*characters.length)]
    return char 
}
// does not work yet
function copyPass() {
          let text = rect1.textContent;
          console.log(text)
          navigator.clipboard.writeText(text)
            .then(() => {
              alert('Text copied to clipboard');
            })
            .catch(err => {
              alert('Error in copying text: ', err);
            });
}


