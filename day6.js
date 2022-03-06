function validate() {
validateName1();
validateName2();   
validateAge();
validatePassword();
radio();
check();
ShowWindow();
}
function validateName1(){
     //not less 4 char

    ///1-value
var firstname = document.getElementsByTagName("input")[0].value;

//2- check length
if (firstname.length==0){
    document.getElementsByTagName("span")[0].innerHTML = "Please enter a name with more than 0 charachters";
}
else if (firstname.length < 4) {
    // console.log("error")
    //3-print error message
    document.getElementsByTagName("span")[0].innerHTML = "Please enter a name with more than 4 charachters";

}
}
function validateName2(){
     //not less 4 char

    ///1-value
var lastname = document.getElementsByTagName("input")[1].value;

//2- check length
if (lastname.length==0){
    document.getElementsByTagName("span")[1].innerHTML = "Please enter a name with more than 0 charachters";
}
else if (lastname.length < 4) {
    // console.log("error")
    //3-print error message
    document.getElementsByTagName("span")[1].innerHTML = "Please enter a name with more than 4 charachters";

}
}
function validateAge(){
    
        //not less 4 char

    ///1-value
var age = document.getElementsByTagName("input")[2].value;

//2- check length
if (age.length==0){
    document.getElementsByTagName("span")[2].innerHTML = "Please enter a age with more than 0 charachters";
}
else if (age.length < 16 && age.length>50) {
    // console.log("error")
    //3-print error message
    document.getElementsByTagName("span")[2].innerHTML = "Please enter a age with more than 4 charachters";
}
}
function validatePassword(){
        //not less 4 char

    ///1-value
var password = document.getElementsByTagName("input")[3].value;

//2- check length
if (password.length==0){
    document.getElementsByTagName("span")[3].innerHTML = "Please enter a pass with more than 0 charachters";
}
else if (password.length < 8) {
    // console.log("error")
    //3-print error message
    document.getElementsByTagName("span")[3].innerHTML = "Please enter a pass with more than 4 charachters";

}
}
function radio(){

if(document.getElementById("female").checked||document.getElementById("male").checked){

}
 
else{
    document.getElementsByTagName("span")[4].innerHTML = "choose the gender";

}}

function check(){
    if(document.getElementById("r").checked||document.getElementById("s").checked||document.getElementById("e").checked){
console.log("hhh");
    }
else{
    document.getElementsByTagName("span")[5].innerHTML = "choose your hoppies";
}
}

function clearX(){
    document.getElementById("female").checked=false;
    document.getElementById("male").checked=false;
document.getElementById("r").checked=false;
document.getElementById("s").checked=false;
document.getElementById("e").checked=false;
document.getElementsByTagName("input")[0].value="";
document.getElementsByTagName("input")[1].value="";
document.getElementsByTagName("input")[2].value="";
document.getElementsByTagName("input")[3].value="";
}

function ShowWindow() {
    console.log("hbggj");
   var newWindow=window.open("newPage.html");
   newWindow.document.write("<h1>firstname</h1>");
   newWindow.document.write(document.getElementsByTagName("input")[0].value);
   newWindow.document.write("<h1>lastname</h1>");
   newWindow.document.write(document.getElementsByTagName("input")[1].value);
   newWindow.document.write("<h1>age</h1>");
   newWindow.document.write(document.getElementsByTagName("input")[2].value);
   newWindow.document.write("<h1>password</h1>");
   newWindow.document.write(document.getElementsByTagName("input")[3].value);
   newWindow.document.write("<h1>radio</h1>");
   if(document.getElementById("male").checked){
newWindow.document.write("male");
   }
  else if(document.getElementById("female").checked){
 newWindow.document.write("female");
}
newWindow.document.write("<h1>checkbox</h1>");
for(var i=6;i<9;i++){
if(document.getElementsByTagName("input")[i].checked){
    newWindow.document.write(document.getElementsByTagName("input")[i].value);
}
}
}