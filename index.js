// Add your functions here
function map(src, callback){
    let newArray = []
    for(let i = 0; i < src.length; i++){
        newArray.push(callback(src[i]))
    }

    return newArray
}

function reduce(src, callback, start){
    let total; 
    if (start){
        total = start
        for (let i = 0; i < src.length; i++){
            total = callback(src[i], total)
        }
        return total
    }else {
        total = src[0]
        for (let i = 1; i < src.length; i++){
            total = callback(src[i], total)
        }
        return total 

    }
}