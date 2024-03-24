function projects(){
    fetch('./portfolio.json')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
projects();

function displayUsers(data){
    const seeDetails = document.getElementById('projects')
 for(const users of data){
    const div =document.createElement('div');
    div.innerHTML=`
    <img src="${users.image}"/>
    <h3>${users.title}</h3>
    <p>${users.descreption}</p>
   <button>${users.github}</button>
   <button>${users.netlify}</button>
    `;
    div.classList.add('projects')
    seeDetails.appendChild(div);
 
 console.log(users);
 }
}


//----------------form area start----------------//
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
//----------------form area end----------------//