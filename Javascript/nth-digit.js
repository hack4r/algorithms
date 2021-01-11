// Find the nth digit of the infinite integer sequence

function nth_digit(n){

    let i,j,k;
    let digits = 9;
    let length = 1;
    let first = 1;
    let result;
    while(n> length * digits){

      n -= length * digits;
      first *=  10;
      digits *= 10;
      length++;
    }

    result = first + (n-1) / length;
    for(first= (n-1) % length; first < length-1; first++){
      result = result / 10;
    }
    return Math.floor(result % 10) ;
}


// Input
let n = 17;
console.log('result', nth_digit(n)); // output : 3
console.log('result2',nth_digit(11)); // output: 0