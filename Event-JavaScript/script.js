function porfolios(){
    fetch('./portfolio.json')
    .then(res => res.json)
    .then(data => displayUsers(data))
// }

// porfolios();

// function displayUsers(data){
//     const seeDetails = document.getElementById('portfolios')
//     for(const users of data){
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <div class="">
//       <img src="images/1.jpg" class="card-img-top" alt="...">
//     </div>
//         `;
//         div.classList.add('portfolios')
//         seeDetails.appendChild(div);
//         console.log(users);
//     }

// }
        









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