function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval=true;
    clearErrors();
    //perform validation and if validation fails, set the value of returnval to false
    var name=document.forms['Form']["fname"].value;
        if(name.length < 5){
            seterror("name" , "* NAME IS TOO SHORT PLEASE ENTER VALID NAME");
            returnval =false;
        }
        if(name.length == 0){
            seterror("name" , "* NAME CANNOT BE ZERO PLEASE ENTER VALID NAME");
            returnval =false;
        }
        
    var email=document.forms['Form']["femail"].value;
    if(email.length == 0){
        seterror("email" , "* EMAIL CANNOT BE ZERO PLEASE ENTER VALID EMAIL ");
        returnval =false;
    }
    if(email.length > 50){
        seterror("email" , "* EMAIL IS TOO LONG PLEASE ENTER VALID EMAIL ");
        returnval =false;
    }
    
    var phone=document.forms['Form']["fphone"].value;
    if(phone.length !=10){
        seterror("phone" , "* PHONE NUMBER CAN CONTAIN ONLY 10 DIGITS PLEASE ENTER VALID PHONE NUMBER ");
        returnval =false;
    }
    var message=document.forms['Form']["fmessage"].value;
    if(message.length >= 60){
        seterror("message" , "* MESSAGE SHOULD HAVE ONLY 60 WORDS PLEASE ENTER PROPER MESSAGE ");
        returnval =false;
    }
    else
    {
        returnval=true;
    }
    return returnval;
}

