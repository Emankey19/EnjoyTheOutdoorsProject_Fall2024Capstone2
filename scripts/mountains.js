document.addEventListener("DOMContentLoaded", () => {
    const mountainSelect = document.getElementById("mountainSelect");
    
    mountainsArray.forEach(mountain => {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainSelect.appendChild(option);
    });
});

function displayMountainInfo() {
    const selectedMountainName = document.getElementById("mountainSelect").value;
    const mountainInfo = document.getElementById("mountainInfo");

    mountainInfo.innerHTML = "";
    const mountain = mountainsArray.find(m => m.name === selectedMountainName);
    
    if (mountain) {
        mountainInfo.innerHTML = `<h2>${mountain.name}</h2>
            <p>${mountain.desc}</p>
            <p>Elevation: ${mountain.elevation} ft</p>
            <img src="images/${mountain.img}" alt="${mountain.name}">`;
    }
}
