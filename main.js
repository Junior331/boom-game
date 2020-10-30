const buttonInitGame = document.querySelector(".btn-init-game");
const controlsGame = document.querySelector(".container-controls-game");
const title = document.querySelector(".game-title");
const subTitle = document.querySelector(".game-description");
const btnPlay = document.querySelector("#play");
const btnExit = document.querySelector("#play");
const btnPause = document.querySelector("#pause");
const modalPause = document.querySelector(".blur");
const btnResumeModal = document.querySelector("#btn-resume-modal");
const balloonsContainer = document.querySelector(".container-balloons");

buttonInitGame.addEventListener("click", function() {
    buttonInitGame.remove();
    title.remove();
    subTitle.remove();
    btnPlay.setAttribute("disabled", "true");
    controlsGame.setAttribute("class", "active");
    console.log("controle", controlsGame);
    initGame();
});

function initGame() {
    setInterval(createBalloon, 1000);
}

function createBalloon() {
    const elementImg = document.createElement("img");

    elementImg.setAttribute("src", "./assets/imgs/baloon.png");
    elementImg.setAttribute("class", "balloon");

    const positionLeft = Math.round(Math.random() * 90);
    const positionTop = Math.round(Math.random() * 80);

    elementImg.style.left = positionLeft + "vw";
    elementImg.style.top = positionTop + "vh";

    elementImg.addEventListener("click", function() {
        removeBalloon(this);
    });

    balloonsContainer.appendChild(elementImg);
}

function removeBalloon(element) {
    const boomSound = new Audio("./assets/boom.mpeg");
    boomSound.play();
    boomSound.volume = 0.1;
    element.remove();
    placar();
}

function placar() {
    setTimeout(function() {
        let points = document.querySelector(".points");
        let wholeValue = parseInt(points.textContent);
        let soma = parseInt(wholeValue) + parseInt(01);
        points.textContent = soma;
    }, 1);
}

function exitGame() {
    let tab = window.open(window.location, "_top");
    tab.close();
}

function reloadGame() {
    location.reload();
}

btnPause.addEventListener("click", function() {
    modalPause.setAttribute("class", "show-modal");
});

btnResumeModal.addEventListener("click", function() {
    modalPause.remove();
});