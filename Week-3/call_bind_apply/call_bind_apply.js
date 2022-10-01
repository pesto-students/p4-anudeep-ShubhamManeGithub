let text = "";
//creat oject1 
let yourName1 = {
    firstName: "Shubham",
    lastName: "Mane"
}

//creat object2 
let yourName2 = {
    firstName: "Akash",
    lastName: "Mishra"
}

//creat object3 
let yourName3 = {
    firstName: "Tanmay",
    lastName: "Patil"
}

//creat function
function fullName(town) {
    text = "Your name is" + " " + this.firstName + " " + this.lastName + " " + "from" + " " + town;
}
fullName();

// for output please comment/hide other two methods from [call apply bind].

//call
fullName.call(yourName1, "Pune");    //used .call and gave value for ".this" from any object
//apply
fullName.apply(yourName2, ["Delhi"]);   //same as .call but arrgument for function is passed by array method
//bind
let details = fullName.bind(yourName3, "Mumbai"); //syntax is same as .call but bind creates copy and we need to creat different function which we can call anytime, anywhere
details();
document.getElementById("output").innerHTML = text;