

let headerNode = document.getElementsByClassName('header')[0]
let headerNodeBtn = document.querySelector('.links .black-btn')

document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY
    console.log(lastKnownScrollPosition);
    if (lastKnownScrollPosition >= 130) {
        headerNode.style.backgroundColor = "white";
        headerNodeBtn.style.backgroundColor = "rgb(26, 137, 23)";
    }
    if (lastKnownScrollPosition <= 128) {
        headerNode.style.backgroundColor = "rgb(255 192 23)";
        headerNodeBtn.style.backgroundColor = "black";
    }
})


//rgb(26, 137, 23);