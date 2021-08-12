const navSlide = () =>{
    const rightSide = document.getElementById('right-side');
    
    rightSide.addEventListener('click', ()=>{
        const nav = document.getElementById('nav-links');
        const burger = document.getElementById('burger');
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    })
}

navSlide();