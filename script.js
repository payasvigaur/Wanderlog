const tripForm = document.getElementById("tripForm");
const tripList = document.getElementById("tripList");

tripForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    const card = document.createElement("div");

    card.className = "trip-card";

    card.innerHTML = `
        <h3>🌸 ${title}</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p>${notes}</p>

        <button class="deleteBtn">Delete</button>
    `;

    tripList.appendChild(card);

    tripForm.reset();

});
document.addEventListener("click", function(e){

    if(e.target.classList.contains("deleteBtn")){

        if(confirm("Delete this trip?")){

            e.target.parentElement.remove();

        }

    }

});