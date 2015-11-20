/**
 * @author: Khoi Nguyen
 */

function where(collections, source) {
    var arr = [];

    for(var j = 0; j < collections.length; j++){
        if(getMathKeyAndValue(collections[j], source)){
            arr.push(collections[j]);
        }
    }

    return arr;
}

function getMathKeyAndValue(firstObject, secondObject){
    var matchNum = 0;
    for(var i = 0; i < Object.keys(secondObject).length; i++){
        var key = Object.keys(secondObject)[i];
        if(firstObject.hasOwnProperty(key) && firstObject[key] === secondObject[key]){
            matchNum++;
        }
    }

    if(matchNum === Object.keys(secondObject).length){
        return firstObject;
    }

    return null;
}

var a =  where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })

console.log('this array ' + a);