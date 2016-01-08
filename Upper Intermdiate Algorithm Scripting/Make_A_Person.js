/**
 * Created by knguyen1 on 1/7/16.
 */

var Person = function(firstAndLast) {
    var fullName  = firstAndLast.split(" ");

    this.getFirstName = function(){
        return fullName[0];
    };

    this.getLastName = function(){
        return fullName[1];
    };

    this.getFullName = function(){
        return this.getFirstName() + ' ' + this.getLastName();
    };

    this.setFirstName = function(first){
        fullName[0] = first;
    };

    this.setLastName = function(last){
        fullName[1] = last;
    };

    this.setFullName = function(firstAndLast){
        fullName = firstAndLast.split(' ');
    };
};

var bob = new Person('Bob Ross');

bob.setFirstName("Something");

console.log(bob.getFirstName());
console.log(bob.getFullName());

