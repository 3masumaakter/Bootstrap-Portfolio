const form = document.querySelector("form");
const Yourname = document.querySelector("#type");
const Email = document.querySelector("#E-mail");
const Subject = document.querySelector("#Subject");
const PalidationDefaultUsername = document.querySelector("#validationDefaultUsername");



form.addEventListener("submit", formHandler);
function formHandler(e){
    e.preventDefault();

    const forminfo = {
        Yourname: Yourname.value,
        Email: Email.value,
        Subject: Subject.value,
        validationDefaultUsername: validationDefaultUsername.value,
    
    }
    console.log(forminfo);
    
}
