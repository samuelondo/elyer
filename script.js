function dijoNo(){
    height = window.innerHeight;
    width = window.innerWidth;

    minHeigth = (Math.random() * height)
    minWidth = (Math.random() * width)

    document.querySelector(".no").style.position = "absolute";
    document.querySelector(".no").style.top = minHeigth + "px";
    document.querySelector(".no").style.left = minWidth + "px";
}

const siButton = document.querySelector('.si');
siButton.addEventListener('click', function () {
    const primeroSection = document.querySelector('.primero');
    const carouselContainer = document.querySelector('.carousel-container');
    const flecha = document.querySelector('.pasar')
    const texto = document.querySelector('.texto')
    const content = document.querySelector('.content')
    const cajainfo = document.querySelector('#info')
    const info = document.querySelector('.info')
    


    primeroSection.style.display = 'none';
    content.style.display = "flex"
    content.style.flexDirection = 'column';
    content.style.alignItems = "center"
    content.style.justifyContent = "center"
    content.style.paddingTop = "1%"
    content.style.fontFamily = "Franklin Gothic Medium"
    cajainfo.style.display = "flex"
    cajainfo.style.flexDirection = "column"
    cajainfo.style.alignItems = "center"
    cajainfo.style.justifyContent = "center"
    cajainfo.style.textAlign = "center"
    info.style.color = "black";
    info.style.backgroundColor = "#fff";
    info.style.border = "none";
    info.style.borderRadius = "20%";
    info.style.fontSize = "16px"
    info.style.fontWeight = "bold";

    texto.style.display = "block"
    texto.style.fontSize = '20px'
    texto.style.textAlign = "center";
    texto.style.fontWeight = "bold"; 
    texto.style.backgroundColor = "white";
    // Muestra el carrusel
    
    carouselContainer.style.display = 'flex';
    carouselContainer.style.flexDirection = 'row';
    carouselContainer.style.overflow = 'hidden';
    carouselContainer.style.width = '100%';
    carouselContainer.style.alignItems = 'center';  
    carouselContainer.style.justifyContent = 'center';  
    carouselContainer.style.textAlign = 'center'; 
    flecha.style.display = "flex"
    flecha.style.flexDirection = 'row';
    flecha.style.alignItems = "center"
    flecha.style.justifyContent = 'space-between'
    flecha.style.width = "30%"
    flecha.style.height = "2%"
});



const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function goToSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    } else if (index >= slides.length) {
        index = 0;
    }

    currentIndex = index;

    // Ocultar todas las diapositivas
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    // Mostrar la diapositiva actual
    slides[currentIndex].style.display = 'block';
}

prevButton.addEventListener('click', () => {
    currentIndex--;
    goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    goToSlide(currentIndex);
});

goToSlide(currentIndex);


info.addEventListener('click', function () {
    const primeroSection = document.querySelector('.primero');
    const carouselContainer = document.querySelector('.carousel-container');
    const flecha = document.querySelector('.pasar')
    const texto = document.querySelector('.texto')
    const content = document.querySelector('.content')
    const contacto = document.querySelector('.contacto')
    const img = document.querySelector('.conimg')
    const textico = document.querySelector('.textico')

    primeroSection.style.display = 'none';
    content.style.display = "none"
    texto.style.display = "none"
    carouselContainer.style.display = 'none';
    flecha.style.display = "none"
    info.style.display = "none"
    contacto.style.margin = "3%"
    contacto.style.display = "flex"
    contacto.style.flexDirection = "column"
    contacto.style.alignItems = "center"
    contacto.style.justifyContent = "center"
    contacto.style.textAlign = "center"
    contacto.style.color = "#333"
    textico.style.color = "white"
    textico.style.fontWeight = "bold";
    textico.style.fontSize = "17px"
    img.style.width = "30%"
    img.style.height = "30%"
    img.style.paddingTop = "1%"
});