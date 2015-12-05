/**
 * @author Khoi Nguyen
 */

function add() {
    var arg_0 = arguments[0];

    if(checkTruthy(arg_0)){
        if(arguments.length > 1) {

            var arg_1 = arguments[1];

            if (checkTruthy(arg_1)) {
                return arg_0 + arg_1;
            }
        } else {

            return function(arg){
                if(checkTruthy(arg)){
                    return arg_0 + arg;
                }
                return undefined;
            };
        }
    }
    return undefined;
}


function checkTruthy(arg){
    return typeof arg === 'number';
}

console.log(add(2,3));
console.log(add(2)(3));
console.log(add("http://bit.ly/IqT6zt"));
console.log(add(2, "3"));
console.log(add(2)([3]));