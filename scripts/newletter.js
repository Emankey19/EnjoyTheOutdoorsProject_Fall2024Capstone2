document.addEventListener("DOMContentLoaded", () => {
    const stateSelect = document.getElementById("state");

    locationData.forEach(state => {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
});
