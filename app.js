const navSlide = () =>{
    const nav = document.querySelector('.nav-links');
    const rightSide = document.querySelector('.right-side');
    const burger = document.querySelector('.burger');
    
    rightSide.addEventListener('click', ()=>{
        nav.classList.toggle('show');
        burger.classList.toggle('toggle');
    })
}

const coaches = [
    {
        name: 'Мирко Бакић',
        desc: 'Веома посвећен и професионалан тренер. Завршио је факултет спорта и физичког васпитања у Београду. Играо је за велике клубове попут Црвене Звезде, ОФК Београд, Војводина,...',
        work: '8 година искуства, ФСФВ Београд, УЕФА А лиценца',
        image: './assets/coach1.jpg'
    },
    {
        name: 'Јован Дучић',
        desc: 'Посвећен тренер  са дугогодишњим искуством у раду са најмлађима. Играо је за ОФК Београд, Раднички. Једно време радио је у кампу Дејана Станковића.',
        work: '11 година искуства, ФСФВ Ниш, УЕФА Б лиценца',
        image: './assets/coach2.jpg'
    },
    {
        name: 'Лазар Костић',
        desc: 'Лазар је наш најмлађи тренер који се показао као веома добар у раду са децом која показују велике резултате. Играо је за ОФК Београд, Раднички. Једно време радио је у кампу Дејана Станковића. ',
        work: '4 година искуства, ФСФВ Београд, УЕФА Б лиценца',
        image: './assets/coach3.jpg'
    }
];

const carouselSlide = document.querySelector('.coaches-slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const coach = document.querySelector('.coach');
const coachName = document.querySelector('.coach h1');
const coachDesc = document.querySelector('.coach p');
const coachWork = document.querySelector('.coach small');
const coachImg = document.querySelector('.coach img');

let counter = 0;
    changeInfo();

nextBtn.addEventListener('click', ()=>{
    if(counter>=coaches.length-1){
        counter=-1;
    }
    coachName.style.animation = 'fadeIn 1s ease forwards';
    counter++;
    changeInfo();
    animation()
})

prevBtn.addEventListener('click', ()=>{
    if(counter<=0){
        counter=coaches.length;
    }

    counter--;
    
    changeInfo()
    animation()
    
})

function changeInfo() {
    coachName.innerText = coaches[counter].name;
    coachDesc.innerText = coaches[counter].desc;
    coachWork.innerText = coaches[counter].work;
    coachImg.src = coaches[counter].image;
}

function animation(){
    if(coachName.style.animation !=''){

        coachName.style.animation='';
    } else{
        coachName.style.animation = 'fadeIn 1s ease forwards';
    }
    if(coachDesc.style.animation !=''){

        coachDesc.style.animation='';
    } else{
        coachDesc.style.animation = 'fadeIn 1s ease forwards';
    }

    if(coachWork.style.animation !=''){

        coachWork.style.animation='';
    } else{
        coachWork.style.animation = 'fadeIn 1s ease forwards';
    }

/*     if(coachImg.style.animation !=''){
        coachImg.style.animation='';
    } else{
        coachImg.style.animation = 'fadeIn 1s ease forwards';
    } */
}

const galleryShow = () =>{
    const images = document.querySelectorAll('.gallery-grid img');
    const modal = document.querySelector('#modal');
    const modalImg = document.querySelector('#modalImg');
    const nextBtn = document.querySelector('#next');
    const prevBtn = document.querySelector('#prev');
    let counter = 0;

images.forEach((image,index) => {
    image.addEventListener('click', ()=>{
        counter = index+1;
        modal.classList.add('show');
        modalImg.src = image.getAttribute('link');
    })
});

modal.addEventListener('click', (e) =>{
    if (e.target !=modal) {
        return;
    } else{
        modal.classList.remove('show');
    }
})


prevBtn.addEventListener('click', ()=>{
    counter--;
    if (counter === 0) {
        counter = images.length;

    }
    modalImg.src = `./assets/${counter}.jpg`;

})

nextBtn.addEventListener('click', ()=>{
    counter++;
    if (counter === 21) {
        counter = 1;

    }
    modalImg.src = `./assets/${counter}.jpg`;

})
}




galleryShow();
navSlide();