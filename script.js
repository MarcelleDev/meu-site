document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("download-btn");

    button.addEventListener("mouseover", function () {
        button.style.backgroundColor = "#ff2e2e"; // Muda para vermelho escuro ao passar o mouse
    });

    button.addEventListener("mouseout", function () {
        button.style.backgroundColor = "#ff4b5c"; // Volta ao normal quando o mouse sai
    });
});
