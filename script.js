const passwordActual = document.querySelector("#passwordActual");
const passwordList = document.querySelector("#passwordsList");

const passwordButton = document.querySelector("#passwordButton");

const passwordH1 = document.querySelector("#passwordActual");

var actual = 0;
var preference = 0;

var count = 0;

passwordButton.addEventListener("click", (event) => {

    if (count < 3) {

    //Increment password's Regular number.
    actual ++;

    //Fixing CSS.
    passwordH1.style.fontSize = "60px";

    //Show it for the user.
    passwordActual.textContent = "Regular - " + actual;

    //Add past passwords in a list.
    let passwordPast = document.createElement("li");
    passwordPast.textContent = "Regular - " + actual;

    passwordList.appendChild(passwordPast);
    passwordList.insertBefore(passwordPast, passwordList.children[0]);

    //Increment count.
    count ++

    console.log(count);
        
    } else {

        //Increment password's Preference number.
        preference ++;

        //Fixing CSS.
        passwordH1.style.fontSize = "45px";

        //Show it for the user.
        passwordActual.textContent = "Preferencial - " + preference;

        //Add past passwords in a list.
        let passwordPast = document.createElement("li");
        passwordPast.textContent = "Preferencial - " + preference;
    
        passwordList.appendChild(passwordPast);
        passwordList.insertBefore(passwordPast, passwordList.children[0]);

        //Reset count.
        count = 0;

        console.log(count);
    }

});
