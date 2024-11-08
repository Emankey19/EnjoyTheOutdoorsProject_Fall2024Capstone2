document.addEventListener("DOMContentLoaded", () => {
    const locationSelect = document.getElementById("locationSelect");
    const parkTypeSelect = document.getElementById("parkTypeSelect");

    locationData.forEach(location => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationSelect.appendChild(option);
    });

    parkTypesArray.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        parkTypeSelect.appendChild(option);
    });
});

function searchParks() {
    const location = document.getElementById("locationSelect").value;
    const parkType = document.getElementById("parkTypeSelect").value;
    const results = document.getElementById("results");
    results.innerHTML = ""; // Clear previous results

    nationalParksArray.forEach(park => {
        const matchesLocation = location && park.State === location;
        const matchesType = parkType && park.LocationName.toLowerCase().includes(parkType.toLowerCase());

        if (matchesLocation || matchesType) {
            const parkDiv = document.createElement("div");
            parkDiv.innerHTML = `<h2>${park.LocationName}</h2>
                                 <p>${park.Address}, ${park.City}, ${park.State}</p>`;
            if (park.Visit) {
                parkDiv.innerHTML += `<p><a href="${park.Visit}" target="_blank">Visit Park Site</a></p>`;
            }
            results.appendChild(parkDiv);
        }
    });
}

function viewAllParks() {
    const results = document.getElementById("results");
    results.innerHTML = ""; 

    nationalParksArray.forEach(park => {
        const parkDiv = document.createElement("div");
        parkDiv.innerHTML = `<h2>${park.LocationName}</h2>
                             <p>${park.Address}, ${park.City}, ${park.State}</p>`;
        if (park.Visit) {
            parkDiv.innerHTML += `<p><a href="${park.Visit}" target="_blank">Visit Park Site</a></p>`;
        }
        results.appendChild(parkDiv);
    });
}
