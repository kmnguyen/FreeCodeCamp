/**
 * @author Khoi Nguyen
 */

function myReplace(str, before, after) {

    // Capitalize first letter if before has first letter capitalized
    if(before.charAt(0) == before.charAt(0).toUpperCase()){
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }

    // replaceall
    var re = new RegExp(before, 'g');
    str =  str.replace(re, after);
    return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");


