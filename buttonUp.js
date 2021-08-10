const scrollUp = () =>{
    const button = document.querySelector('#up');

    window.addEventListener('scroll', ()=>{
        console.log(pageYOffset)
        if (pageYOffset > 1630) {
            button.classList.add('show-button');
        }

        if(pageYOffset<1630){
            button.classList.remove('show-button');
        }
    })
}

scrollUp();