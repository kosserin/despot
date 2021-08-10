const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const rightSide = document.querySelector('.right-side');
    const burger = document.querySelector('.burger');
    
    rightSide.addEventListener('click', ()=>{
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    })
}

navSlide();