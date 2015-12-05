/**
 * @author Khoi Nguyen
 */

function steamroller(arr) {
    var answer = [];

    var flatten = function(arg){
        if(Array.isArray(arg)){
            for(var i = 0; i < arg.length; i++){
                flatten(arg[i]);
            }
        } else {
            answer.push(arg);
        }
    };

    arr.forEach(flatten);
    return answer;
}

console.log(steamroller([[["a"]], [["b"]]]));
console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([1, [], [3, [[4]]]]));
console.log(steamroller([1, {}, [3, [[4]]]]));
