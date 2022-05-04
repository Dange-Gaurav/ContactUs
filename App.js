let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let mobileNumberEl = document.getElementById("number");
let mobileNumberErrMsgEl = document.getElementById("numberErrMsg");

let messageEl = document.getElementById("message");
let messageErrMsgEl = document.getElementById("messageErrMsg");

let requestContainer = document.getElementById("request-container");

messageEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        messageErrMsgEl.textContent = "Required*";

    } else {
        messageErrMsgEl.textContent = "";
    }
});

mobileNumberEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        mobileNumberErrMsgEl.textContent = "Required*";
    } else {
        mobileNumberErrMsgEl.textContent = "";
    }
});


nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});

function getRequestListFromLocalStorage() {
    let stringifiedRequestList = localStorage.getItem("RequestList");
    let parsedRequestList = JSON.parse(stringifiedRequestList);
    if (parsedRequestList === null) {
        return [];
    } else {
        return parsedRequestList;
    }
}


let submitButton = document.getElementById("button");
let RequestList = getRequestListFromLocalStorage();
let requestCount = RequestList.length;

submitButton.onclick = function() {
    const d = new Date();
    let newMsgTime = document.createElement("p");
    newMsgTime = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    console.log(newMsgTime);
    requestCount = requestCount + 1;

    let detailsObject = {
        Name: nameEl.value,
        Email: emailEl.value,
        Mobile: mobileNumberEl.value,
        Message: messageEl.value,
        Date: newMsgTime,
        uniqueNo: requestCount
    };
    
    console.log(detailsObject)
    RequestList.push(detailsObject);
    localStorage.setItem("RequestList", JSON.stringify(RequestList));
    nameEl.value = "";
    emailEl.value = "";
    mobileNumberEl.value = "";
    messageEl.value = "";
}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
});






