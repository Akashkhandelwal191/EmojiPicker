var audio = new Audio("sound.mp3");

function move(id1) {
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', "&" + id1);
    document.body.appendChild(inputElement);
    inputElement.select();

    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
    let face = "&" + id1;
    window.scrollTo(0,0);
    let cover = document.getElementById('cover');
    cover.innerHTML =`<h1 id="face">${face}</h1>
                      <h2>COPIED!!</h2>
                      <h3>${id1}</h3>`;
    document.body.style.overflow = "hidden";
    cover.classList.remove('coverArea');
    audio.play();
    setTimeout(()=>{
        
        location.reload();
    },3000)
}


