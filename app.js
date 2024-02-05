const degree=document.getElementById("degree");
const tempType=document.getElementById("temp-type");
const button= document.getElementById("button");
const result=document.getElementById("result");

window.addEventListener("load", ()=> {
    degree.value="";
    result.innerHTML="";  
})

button.addEventListener("click", (e)=> {
    e.preventDefault();
    if (tempType.value==="Celsius") {
        convertCelsiusToFahrenheit(degree.value);
    }

    else {
        convertFahrenheitToCelsius(degree.value)
    }
})

function convertCelsiusToFahrenheit(celsius) {
    const val= ((9/5)*celsius)+32;
    result.innerHTML = val + " Fahrenheit";
}

function convertFahrenheitToCelsius(fahrenheit) {
    const val= (5/9)*(fahrenheit-32);
    result.innerHTML=val + " Celsius";
}

function validateInput() {
    var inputElement = document.getElementById("degree");
    console.log(inputElement);
    var validationMessageElement = document.getElementById("validationMessage");
    if (/^[0-9]+$/.test(inputElement.value)) {
        validationMessageElement.innerText = "";
        inputElement.setCustomValidity("");
    }
    else {
        validationMessageElement.innerText = "Please enter only numbers.";
        inputElement.setCustomValidity("Please enter only numbers.");
    }
}