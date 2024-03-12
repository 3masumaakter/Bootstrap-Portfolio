function Portfolio(){
    fetch("portfolio.json")
    .then(res => res.json())
    .then(data => displayPortfolio(data))

}
Portfolio();
const displayPortfolio = (data) =>{
    const allportfolio = document.getElementById('Portfolio');
    for(const portfolio of data){
        const div = document.createElement('div');
        div.classList.add("portfolio")  
         div.innerHTML = `
        
        <div class="">
        <img src="images/3.jpg" class="card-img-top" alt="...">
        </div>
        `;
    
        allportfolio.appendChild(div);
        console.log(portfolio);
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