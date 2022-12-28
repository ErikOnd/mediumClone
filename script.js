

let headerNode = document.getElementsByClassName('header')[0]
let headerNodeBtn = document.querySelector('.links .black-btn')

document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY
    console.log(lastKnownScrollPosition);
    if (lastKnownScrollPosition >= 370) {
        console.log('test');
        headerNode.classList.add('tran-white')
        headerNode.classList.remove('tran-yellow')

        headerNodeBtn.classList.add('tran-green')
        headerNodeBtn.classList.remove('tran-black')
    }
    if (lastKnownScrollPosition < 370) {
        headerNode.classList.add('tran-yellow')
        headerNode.classList.remove('tran-white')

        headerNodeBtn.classList.add('tran-black')
        headerNodeBtn.classList.remove('tran-green')
    }
})


//rgb(26, 137, 23);





/* change color in css with classlist.add() */
/* 
li
{
 color: #000;
 transition: color 1s ease;
} */