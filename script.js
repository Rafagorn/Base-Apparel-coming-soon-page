let email = document.querySelector(".input-email");
let boton = document.querySelector(".submit");
let alert = document.querySelector(".alert");
let p_alert = document.querySelector(".p-alert");
let campoborder = document.querySelector(".campo-y-boton");

const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
	
email.addEventListener("keyup", validarForm);
boton.addEventListener("click", validarForm);

function validarForm() {
        if(email.value.match(regExp)){
            alert.classList.remove("active");
            alert.classList.add("inactive");
            p_alert.classList.remove("active");
            p_alert.classList.add("inactive");
            campoborder.classList.remove("borderror");
            campoborder.classList.add("border");
        }else{
            alert.classList.add("active");
            p_alert.classList.add("active");
            campoborder.classList.remove("border");
            campoborder.classList.add("borderror");
        }
    }
    

    



