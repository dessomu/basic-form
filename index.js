let guests = [];

let generateId = function () {
    return Math.ceil(Math.random() * 1000)
}

let tempNameNode = null;
let tempEmailNode = null;

const addNode = document.querySelector(".add");
addNode.addEventListener("click", () => {
    const id = generateId();
    const nameNode = document.querySelector("#name");
    const emailNode = document.querySelector("#email");

    guests.push({
        id: id,
        name: nameNode.value,
        email: emailNode.value,
    });

    // <div class="guest">
    //  <p>Name : <span>hemendra khatik</span></p>
    //  <p>Email : <span>hemendra@gmaiulk.com</span></p>
    //  <button class="edit">Edit</button>
    //  <button class="delete">Delete</button>
    // </div>

    //Creating all these elements dynamically

    const guestNode = document.createElement("div");
    guestNode.className = "guest";

    const guestNameNode = document.createElement("p");
    guestNameNode.textContent = "Name : ";
    const nameSpanNode = document.createElement("span");
    nameSpanNode.textContent = nameNode.value;
    guestNameNode.append(nameSpanNode);


    const guestEmailNode = document.createElement("p");
    guestEmailNode.textContent = "Email : ";
    const emailSpanNode = document.createElement("span");
    emailSpanNode.textContent = emailNode.value;
    guestEmailNode.append(emailSpanNode);

    const editNode = document.createElement("button");
    editNode.setAttribute("id", id)
    editNode.className = "edit";
    editNode.textContent = "Edit";

    const deleteNode = document.createElement("button");
    deleteNode.setAttribute("id", id)
    deleteNode.className = "delete";
    deleteNode.textContent = "Delete";


    guestNode.append(guestNameNode);
    guestNode.append(guestEmailNode);
    guestNode.append(editNode);
    guestNode.append(deleteNode);

    const guestContainerNode = document.querySelector(".guests-details-container");
    guestContainerNode.append(guestNode);

    editNode.addEventListener("click", (e) => {
        const id = e.target.getAttribute("id");

        const modalNode = document.querySelector(".modal");
        modalNode.style.display = "flex";

        tempNameNode = e.target.parentNode.children[0].children[0];
        tempEmailNode = e.target.parentNode.children[1].children[0];

        const name = tempNameNode.textContent;
        const email = tempEmailNode.textContent;

        const editNameNode = document.querySelector("#edit-name");
        const editEmailNode = document.querySelector("#edit-email");

        editNameNode.value = name;
        editEmailNode.value = email;

        const updateNode = document.querySelector(".update");
        const cancelNode = document.querySelector(".cancel");

        updateNode.setAttribute("id", id);
        cancelNode.setAttribute("id", id);

    });

    deleteNode.addEventListener("click", (e) => {
        const id = parseInt(e.target.getAttribute("id"));

        guests = guests.filter((guest) => {
            return guest.id !== id;
        });

        e.target.parentNode.remove();
        console.log(guests);
    });

});

const updateNode = document.querySelector(".update");
updateNode.addEventListener("click", (e) => {
    const id = parseInt(e.target.getAttribute("id"));

    const editNameNode = document.querySelector("#edit-name");
    const editEmailNode = document.querySelector("#edit-email");

    guests = guests.map((guest) => {
        if (guest.id === id) {
            return {
                id: id,
                name: editNameNode.value,
                email: editEmailNode.value,
            }
        } else {
            return guest;
        };
    });
    tempNameNode.textContent = editNameNode.value;
    tempEmailNode.textContent = editEmailNode.value;

    const modalNode = document.querySelector(".modal");
    modalNode.style.display = "none";

});

const cancelNode = document.querySelector(".cancel");
cancelNode.addEventListener("click", (e) => {
    const modalNode = document.querySelector(".modal");
    modalNode.style.display = "none";

});
