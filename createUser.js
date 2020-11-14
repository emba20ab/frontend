

class User{
    constructor(firstname, lastname, username, password, age, gender, interest){
        this.firstname = firstname
        this.lastname = lastname
        this.username = username
        this.password = password
        this.age = age
        this.gender = gender
        this.interest = interest
    }
}



let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");
let username = document.getElementById("username");
let password = document.getElementById("password");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let interest = document.getElementById("interest"); 



function validate(){
        var errormessage = ""; 
        
        //error for username
            /*if (username.value == "") {
                errormessage += "box is empty \n";
            }
           
        //error for first name
            if (firstname.value == "") {
                errormessage += "First name is empty\n"
            }
            
        //error for last name
            if (lastname.value == "") {
                errormessage += "Last name is empty\n"
            }
        
        //error for age
            if(age.value == "") {
            errormessage += "Skriv din alder i tal\n"
            }
        //error for gender
        
            if(gender.value == "") {
                errormessage += "What is your gender?\n";
            }
        
        //error for interest
            if(interest.value == "")
            errormessage += "Write your interest\n"
        
        //error for password
        
            /*if (password1.value == "" || password1.value.length <6){
                errormessage += "Submit a password with at least 6 characters\n"
            }
        
        //alert for errors
        */
        if (errormessage != ""){
            alert(errormessage)
        }
        
        else
                {
                    let userdata = {
                        firstname : firstname.value,
                        lastname : lastname.value,
                        username : username.value,
                        password : password.value,
                        //age : age.value, 
                        gender : gender.value, 
                    }
        
                    axios.post("http://localhost:3001/users", userdata)
                    .then(function(response){
                        console.log(response);
                    })
                 alert('Welcome');
               window.location = "profile.html";
                }
        }


     

//





