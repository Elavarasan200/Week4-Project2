const textarea = document.getElementById("message");
const count = document.getElementById("count");
const warning = document.getElementById("warning");

const maxLength = 200;

textarea.addEventListener("input", () => {

    let currentLength = textarea.value.length;

    count.textContent = currentLength;

    let remaining = maxLength - currentLength;

    if(currentLength >= maxLength){
        warning.textContent =
        "Character limit reached!";
    }
    else{
        warning.textContent =
        `${remaining} characters remaining`;
    }

});