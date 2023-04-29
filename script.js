
//5
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);



//6
const signNowButton = document.getElementById("sign-now-button");

const addSignature = (event)=> {
  let name = document.getElementById("name").value;
  let hometown = document.getElementById("hometown").value;
  let email = document.getElementById("email").value;
  let signatures = document.querySelector(".signatures");
  
  const newSignature = document.createElement("p");
  const newText = document.createTextNode("🖊️" + name + " from " + hometown + " support this.");
  newSignature.innerText = newText.nodeValue;
  signatures.appendChild(newSignature);
  count += 1;
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
    addSignature();
    for (let i = 0; i< petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
  
  
}

signNowButton.addEventListener("click", validateForm);