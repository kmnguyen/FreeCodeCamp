/**
 * @author Khoi Nguyen
 */

function unite(arr1, arr2, arr3) {
    var arr = [];
    for(var i = 0; i < arguments.length; i++){
        arr.push(arguments[i]);
    }

    arr = arr.reduce(function(previousValue, currentValue){
        for(var j = 0; j < currentValue.length; j++){
            if(previousValue.indexOf(currentValue[j]) > -1){
                currentValue.splice(j, 1);
                j--;
            }
        }
        return previousValue.concat(currentValue);
    });

    return arr;
}

var a = unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(a.length + a.toString());