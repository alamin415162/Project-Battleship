function capitalize(string){
    const arr = [...string]
    arr[0] = arr[0].toUpperCase()
    
    return arr.join('')
}

function reverseString(string){

    const arr = [...string]
    
    return arr.reverse().join('')
}

const calculator = {
    add(num1,num2) {
        return num1 + num2
    },
    substract(num1,num2){
        return num1 - num2
    },
    mutiply(num1,num2){
        return num1 * num2
    },
    divide(num1,num2){
        return num1 / num2
    }
}


function analyzer(arr){
    arr.sort((a,b) => a - b)
    const length = arr.length
    
    const min = arr[0]

    const max = arr[length - 1]

    let sum = 0
    for(let i = 0; i < length; i++){
        sum += arr[i]
    }
    const average = sum / length
    const obj = {
        average: average,
        min: min,
        max: max,
        length: length
    }
    return obj
}








export {capitalize, reverseString, calculator, analyzer}
