function showBet(teamName) {
    const modal = document.getElementById('betModal');
    const teamNameElement = document.getElementById('teamName');
    teamNameElement.textContent = teamName;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('betModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('betModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
