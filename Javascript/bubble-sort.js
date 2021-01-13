// Bubble Sort in JS

function BubbleSort(inputArr) {
    let arr_len = inputArr.length;

    let swapped;

    do{
        swapped = false;
        for(let i = 0; i< arr_len; i++){

            if(inputArr[i] > inputArr[i+1]){
                let temp = inputArr[i];
                inputArr[i] = inputArr[i+1];
                inputArr[i+1] = temp;
                swapped = true;
            }
        }
    } while(swapped);

    return inputArr;
}

let inputArr = [2,4,1,3,5,6];

console.log('Sorted Array :' , BubbleSort(inputArr)); // Sorted Array : 1,2,3,4,5,6
