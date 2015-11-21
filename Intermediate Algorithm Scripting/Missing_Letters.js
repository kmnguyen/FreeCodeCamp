/**
 * @author Khoi Nguyen
 */


function fearNotLetter(str) {
    var strArr = [];

    for(var i = 1; i < str.length; i++){
        var previousCharCode = str.charCodeAt(i-1);
        var currentCharCode = str.charCodeAt(i);
        var charCodeDiff = currentCharCode - previousCharCode;

        if(charCodeDiff !== 1){
            for(var j = 1; j < charCodeDiff; j++){
                strArr.push(String.fromCharCode(previousCharCode+j));
            }
            return strArr.join('');
        }
    }

    return undefined;
}

console.log(fearNotLetter("abce"));