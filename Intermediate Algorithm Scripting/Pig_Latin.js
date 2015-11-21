/**
 * @author Khoi Nguyen
 */

var vowels = ['a', 'e', 'i', 'o', 'u'];

function translate(str) {
    if(vowels.indexOf(str.charAt(0)) > -1){
        str = str + 'way';
    } else {
        var firstVowelIndex = findFirstVowel(str);
        var consonant = str.slice(0, firstVowelIndex);
        var restOfStr = str.substr(firstVowelIndex);
        str = restOfStr + consonant + 'ay';
    }
    return str;
}

function findFirstVowel(str){
    var strArr = str.split('');
    var index = str.length;
    for(var vowel in vowels){
        var vowelIndex = strArr.indexOf(vowels[vowel]);
        if(vowelIndex > -1 && vowelIndex < index){
            index = vowelIndex;
        }
    }
    return index;
}

console.log(translate("consonant"));
