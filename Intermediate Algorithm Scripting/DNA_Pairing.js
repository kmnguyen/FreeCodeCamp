/**
 * @author Khoi Nguyen
 */

var dnaPairMap = {
    'C': 'G',
    'G': 'C',
    'A': 'T',
    'T': 'A'
};

function pair(str) {
    var strArr = str.split('');
    var pairArr = [];
    for(var i = 0; i < str.length; i++){
        var arr = [strArr[i], dnaPairMap[strArr[i]]];
        pairArr.push(arr);
    }
    return pairArr;
}

console.log(pair("GCG"));

