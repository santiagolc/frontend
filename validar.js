document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("validar").addEventListener("click", validacion);
    
    function validacion(){

        let name, lastName, email, password, txt;
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        

        name = document.getElementById("name").value; 
        lastName = document.getElementById("lastName").value; 
        email = document.getElementById("email").value; 
        password = document.getElementById("password").value; 
        

        if (name == "") {
            document.getElementById("resultadoName").innerHTML =  "<span class='error'> First Name cannot be empty </span>";
            document.getElementById("name").setAttribute('style','border: solid 1px red');
        }

        if (lastName == "") {
            document.getElementById("resultadoLast").innerHTML =  "<span class='error'>Last Name cannot be empty</span>";
            document.getElementById("lastName").setAttribute('style','border: solid 1px red');
        }
        
        if (email == "") {
            document.getElementById("resultadoEmail").innerHTML =  "<span class='error'>Email cannot be empty</span>";
            document.getElementById("email").setAttribute('style','border: solid 1px red');
        } else if (emailRegex.test(email)){
            txt = "ok";
            }else { 
                document.getElementById("resultadoEmail").innerHTML =  "<span class='error'>Looks like this is not an email</span>";
                document.getElementById("email").setAttribute('style','border: solid 1px red');
        }
            
        if (password == "") {
            document.getElementById("resultadoPass").innerHTML =  "<span class='error'>Password cannot be empty</span>";
            document.getElementById("password").setAttribute('style','border: solid 1px red');
        }
   
    }

   




});