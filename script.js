
//5
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);



//6
const signNowButton = document.getElementById("sign-now-button");

const addSignature = (person)=> {
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;
  let signatures = document.querySelector(".signatures");
  
  const newSignature = document.createElement("p");
  const newText = document.createTextNode("🖊️" + person.name + " from " + person.town + " support this.");
  newSignature.innerText = newText.nodeValue;
  signatures.appendChild(newSignature);

}

//signNowButton.addEventListener("click", addSignature);
//stretch 6


//7
const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;
  
  for (let i = 0; i < petitionInputs.length; i++){
    if (petitionInputs[i].value.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  if (containsErrors == false) {
    let person = {
    name: petitionInputs[0].value,
    town: petitionInputs[1].value,
    email: petitionInputs[2].value
  }
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i< petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
  
  
}

signNowButton.addEventListener("click", validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

let revealableContainers = document.querySelectorAll(".revealable");

const reveal = (event) => {
  for(let i = 0;i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
  revealableContainers[i].classList.add('active');
  } else {
    revealableContainers[i].classList.remove('active');
  }
}
}

window.addEventListener('scroll', reveal);

const toggleModal = (person) => {

  let modal = document.querySelector(".modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  const newContent = document.createTextNode("Thanks " + person.name + "! " + person.town + " represent!");
  modalContent.innerText = newContent.nodeValue;


  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
                   }, 4000)
    let intervalId = setInterval(scaleImage, 500);
}

let scaleFactor = 1;
let modalImage = document.getElementById("modal-img");

const scaleImage = () => {
  scaleFactor = scaleFactor === 1 ? 0.8 : 1
  modalImage.style.transform = "scale(${scaleFactor})";
}


let modalButton = document.getElementById("modal-button");

const hideModal = () => {
    let modal = document.querySelector(".modal");
    modal.style.display = "none";
}

modalButton.addEventListener("click", hideModal);