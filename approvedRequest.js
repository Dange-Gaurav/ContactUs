
function getApprovedListFromLocalStorage() {
    let stringifiedRequestList = localStorage.getItem("approveList");
    let parsedRequestList = JSON.parse(stringifiedRequestList);
    if (parsedRequestList === null) {
        return [];
    } else {
        return parsedRequestList;
    }
}

let requestContainer = document.getElementById("approved-request-container");
let RequestList = getApprovedListFromLocalStorage();


function createAndAppendRequest(RequestItem) {
    
    let requestId = "request" + RequestItem.uniqueNo;
    console.log(requestId);

    let detailsContainer = document.createElement("li");
    detailsContainer.classList.add("details-container");
    detailsContainer.id=requestId;
    requestContainer.appendChild(detailsContainer);

    let profileContainer = document.createElement("div");
    profileContainer.classList.add("profile-container");
    detailsContainer.appendChild(profileContainer);


    let nameEl = document.createElement("h1");
    nameEl.textContent = RequestItem.Name;
    nameEl.classList.add("name");
    profileContainer.appendChild(nameEl);

    let contactDetailsContainer = document.createElement("div");
    profileContainer.appendChild(contactDetailsContainer);

    let emailEl = document.createElement("p");
    emailEl.textContent = RequestItem.Email;
    emailEl.classList.add("text-content");
    contactDetailsContainer.appendChild(emailEl);

    let numberEl = document.createElement("p");
    numberEl.textContent = RequestItem.Mobile;
    numberEl.classList.add("text-content");
    contactDetailsContainer.appendChild(numberEl);

    let messageHeading = document.createElement("h1");
    messageHeading.textContent = "Message";
    messageHeading.classList.add("msg-heading");
    detailsContainer.appendChild(messageHeading);

    let messageContainer = document.createElement("div");
    messageContainer.classList.add("message-container");
    detailsContainer.appendChild(messageContainer);

    let messageEl = document.createElement("p");
    messageEl.textContent = RequestItem.Message;
    messageEl.classList.add("message");
    messageContainer.appendChild(messageEl);

    let dateEl = document.createElement("p");
    dateEl.textContent= RequestItem.Date;
    dateEl.classList.add("date");
    contactDetailsContainer.appendChild(dateEl);
}

for (let eachRequest of RequestList) {
    createAndAppendRequest(eachRequest);
    console.log(eachRequest);
}