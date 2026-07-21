const tripForm = document.getElementById("tripForm");
const tripList = document.getElementById("tripList");

const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

let imageData = "";
let trips= JSON.parse(localStorage.getItem("trips"))||[];

imageInput.addEventListener("change", function(){

    const file = this.files[0];

    if(file){

        const reader = new FileReader();

        reader.onload = function(e){

            imageData = e.target.result;

            preview.src = imageData;

            preview.style.display = "block";

        };

        reader.readAsDataURL(file);

    }

});

tripForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const notes = document.getElementById("notes").value;

    const card = document.createElement("div");

    card.className = "trip-card";

    card.innerHTML = `
    <img src="${imageData}" class="trip-image">
        <h3>🌸 ${title}</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p>${notes}</p>

        <button class="deleteBtn">Delete</button>
    `;

    tripList.appendChild(card);
    trips.push({
    title,
    destination,
    date,
    notes,
    image: imageData
});

localStorage.setItem("trips", JSON.stringify(trips));

    tripForm.reset();

});
document.addEventListener("click", function(e){

    if(e.target.classList.contains("deleteBtn")){

        if(confirm("Delete this trip?")){

            e.target.parentElement.remove();

        }

    }

});
window.onload = function(){

    trips.forEach(function(trip){

        const card = document.createElement("div");

        card.className = "trip-card";

        card.innerHTML = `
            <img src="${trip.image}" class="trip-image">

            <h3>🌸 ${trip.title}</h3>

            <p><strong>Destination:</strong> ${trip.destination}</p>

            <p><strong>Date:</strong> ${trip.date}</p>

            <p>${trip.notes}</p>

            <button class="deleteBtn">Delete</button>
        `;

        tripList.appendChild(card);

    });

};