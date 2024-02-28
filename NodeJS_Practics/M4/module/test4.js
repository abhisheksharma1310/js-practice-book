
module.exports = function(fName, lName){
    this.fName = fName;
    this.lName = lName;
    this.fullName = function(){
        return `${this.fName} ${this.lName}`;
    }
}