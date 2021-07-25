writeCards(["Lisa","Kaitlin","Jan"], "birthday");
const event = 'gift';

function writeCards(names, event) {
    let newArr = [];
    for (let i = 0; i < names.length; i++) { 
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;

    }
    return newArr;
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
      console.log(positiveNumber);
      positiveNumber--;  
    }
}