async function getSunsetForMountain(lat, lng) {
    let response = await fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    return data.results;
}

document.addEventListener("DOMContentLoaded", () => { 
    const mountainSelect = document.getElementById("mountainSelect");
    const mountainInfo = document.getElementById("mountainInfo");


    mountainsArray.forEach(mountain => {
        const option = document.createElement("option");
        option.value = mountain.name;
        option.textContent = mountain.name;
        mountainSelect.appendChild(option);
    });


    mountainSelect.addEventListener("change", () => {
        const selectedMountainName = mountainSelect.value;
        mountainInfo.innerHTML = "";
        const mountain = mountainsArray.find(m => m.name === selectedMountainName);

        if (mountain) {
            mountainInfo.innerHTML = `<h2>${mountain.name}</h2>
                                      <p>${mountain.desc}</p>
                                      <p>Elevation: ${mountain.elevation} ft</p>
                                      <img src="images/${mountain.img}" alt="${mountain.name}">`;

           
            getSunsetForMountain(mountain.lat, mountain.lng).then(data => {
                if (data) {
                    mountainInfo.innerHTML += `<p>Sunrise: ${data.sunrise}</p>
                                               <p>Sunset: ${data.sunset}</p>`;
                }
            });
        }
    });
});
