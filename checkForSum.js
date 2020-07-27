/*
#1 from Daily Coding Challenge - on - July 26th 2020

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

function checkForSum(arr,k){
    //map array
    let map = new Map();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            let c=map.get(arr[i]);
            map.set(arr[i],++c);
        } else {
            map.set(arr[i],1);
        }
    }
    console.log(map);
    for(let i=0;i<arr.length;i++){
        if(map.has(k-arr[i]) && map.get(k-arr[i])>0){
            return true;
        }
    }
    return false;
}

console.log('answer is :'+checkForSum([10, 15, 3, 7],17))
