// Code your solutions in this file



function writeCards (Array, event){
    let blankArray = []
    for(let i=0; i < Array.length; i++ ){
        blankArray.push(`Thank you, ${Array[i]}, for the wonderful ${event} gift!`)
    }
    return blankArray;
}




function countDown(number){
    let start = number;
    while (start >= 0) {
        console.log(start--);
    }

}