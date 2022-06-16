/*
Per fare questo esercizio ho bisogno di:
    1 - Inizializzare un ciclo for: for (let i = 1; i <= 100; i++) {};
    2 - Capire come targettare i numeri divisibili per 3 e che lascino resto 0 (attraverso %);
    3 - Capire come targettare i numeri divisibili per 5 e che lascino resto 0 (attraverso %);
    3 - Capire come targettare i numeri divisibili per 3 e 5 (usando un if statement con operatore && AND
        che permette di verificare la condizione solo se tutte e due sono vere) 
        che lascino resto 0 (attraverso %);
A questo punto attraverso if statement stampare prima in console e poi (se riesci in tempo) nel DOM ==>(attraverso
document.createElement ('nome tag') append e innerHTML.):
    - Fizz al posto dei numeri divisibili per 3 e che danno resto 0;
    - Buzz al posto dei numeri divisibili per 5 e che danno resto 0;
    - FizzBuzz al posto dei numeri divisibili per 3 e per 5 e che danno resto 0;
*/

const boxWrapper = document.querySelector ('div.container');

for (let i = 1; i <= 100; i++) {
    // console.log(i)
    const fizzNumbers = i % 3;
    // console.log (fizzNumbers)
    const buzzNumbers = i % 5;
    // console.log(buzzNumbers)
    let message;

    if (fizzNumbers == 0 && buzzNumbers == 0){
        message = "FizzBuzz";  
    } else if (fizzNumbers == 0) {
        message = "Fizz";
    } else if (buzzNumbers == 0){
        message = "Buzz";
    } else {
        message = i;
    }
    console.log (message);

    const boxElements = document.createElement ('div');
    boxWrapper.append (boxElements) ;
    const boxContent = document.createTextNode (message);
    boxElements.appendChild (boxContent);
    boxElements.classList.add ("ms_box", "p-2", "flex", "align-center", "justify-center")

};