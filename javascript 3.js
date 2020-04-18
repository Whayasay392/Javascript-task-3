
function myCalculator(bounce) {
    let myArray = [];
    for (let number = 1; number <= bounce; number++)    {
        let myOut = '';
        if (number%2===0 && number%3===0) {
            myOut = 'yu-gi';
        }
        else if (number%2===0 && number%5===0) {
            myOut = 'yu-oh';
        }
        else if (number%3===0 && number%5===0) {
            myOut = 'gi-oh';
        }
       else if (number%2===0) {
            myOut = 'yu';
        }
        else if (number%3===0) {
            myOut = 'gi';
        }
        else if (number%5===0) {
            myOut = 'oh';
        }
       
        else    {
            myOut = number;
    }
    myArray.push(myOut) 
}
    console.log(myArray)
}
myCalculator(20);