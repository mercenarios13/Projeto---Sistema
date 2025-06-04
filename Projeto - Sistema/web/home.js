document.addEventListener('DOMContentLoaded', () => {
    const janelaBemVindo = document.querySelector('#janelaBemVindo');
    const janelaAceito = document.querySelector('#janelaAceito');
    const janelaRecuso = document.querySelector('#janelaRecuso');
    const janelaStatus = document.querySelector('#janelaStatus');
    const janelaCriar = document.querySelector('#janelaCriar');
    const audio = document.getElementById('audio');
    const acceptButton = document.querySelector('#aceitarBtn');
    const refuseButton = document.querySelector('.refuse');
    const prosseguirButton = document.querySelector('.prosseguir');
    const createButton = document.querySelector('.create');
    const fecharCriarButton = document.querySelector('#fecharCriar');
    const quests = document.querySelector('.quests');
    const inventory = document.querySelector('.inventory');
    const store = document.querySelector('.store');
    const equip = document.querySelector('.equip');
    const menuLeft = document.querySelector('.menu');
    const progress = document.querySelector('.progress');
    const offert = document.querySelector('.offert');
    const titles = document.querySelector('.titles');
    const janelaTitle = document.querySelector('#janelaTitle');
    const fecharTitleButton = document.querySelector('#fecharTitle');
    const titlesButton = document.querySelector('.titles');
    const janelaProgresso = document.querySelector('#janelaProgresso');
    const fecharProgressButton = document.querySelector('#fecharProgresso');
    const progressButton = document.querySelector('.progress');
    const menuright = document.querySelector('.menuright');
    const menuleft = document.querySelector('.menuleft');

    janelaBemVindo.style.animation = "abrirJanela 0.25s ease-out forwards";


    acceptButton.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
        janelaBemVindo.style.display = 'none';
        janelaAceito.style.display = 'block';
    });

    refuseButton.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
        janelaBemVindo.style.display = 'none';
        janelaRecuso.style.display = 'block';
    });

    prosseguirButton.addEventListener('click', () => {
        audio.currentTime = 0;
        audio.play();
        janelaAceito.style.display = 'none';
        janelaStatus.style.display = 'block';
    });
});