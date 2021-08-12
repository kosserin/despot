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
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const coachName = document.getElementById('coach-heading');
const coachDesc = document.getElementById('coach-text');
const coachWork = document.getElementById('coach-small');
const coachImg = document.getElementById('coach-image');
let counter = 0;
changeInfo();

nextBtn.addEventListener('click', ()=>{
    if(counter>=coaches.length-1){
        counter=-1;
    }
    counter++;
    changeInfo();
})

prevBtn.addEventListener('click', ()=>{
    if(counter<=0){
        counter=coaches.length;
    }
    counter--;
    changeInfo()
})

function changeInfo() {
    coachName.innerText = coaches[counter].name;
    coachDesc.innerText = coaches[counter].desc;
    coachWork.innerText = coaches[counter].work;
    coachImg.src = coaches[counter].image;
}

const galleryShow = () =>{
    const images = document.querySelectorAll('.gallery-grid img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
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
})}

galleryShow();