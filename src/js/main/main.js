
const mobileSliderConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    gap: 20
}


const projectSliderConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 2,
    focusAt: 0,
    gap: 20,
    bound: false,
    breakpoints:{
      1180:{
        type: 'carousel',
        perView:1,
        gap: 0,
        focusAt: 'center',
      }
    }
}

const projectsSliderInfo = [
    {
        city: 'Rostov',
        area: '81 m2',
        time:'3.5 months',
        cost:'upon request',
    },
    {
        city: 'New York',
        area: '120 m2',
        time:'2.5 months',
        cost:'$100,000',
    },
    {
        city: 'Romania',
        area: '57 m2',
        time:'1 month',
        cost:'$25,000',
    },
]



const projectNameElements = document.querySelectorAll('.mobile-slider__name');


let projectsSliderItems = document.querySelectorAll('.project-carousel__desc');

const projectMobileSlider = new Glide('.projects__slider', projectSliderConfig );

projectMobileSlider.on(['mount.after', 'run'], () => {
    setSliderInfo();
    setActiveName();
})

projectMobileSlider.mount();

const galleryMobileSlider = new Glide('.gallery__slider', mobileSliderConfig ).mount();

projectNameElements.forEach( (element, index) => {
    element.addEventListener('click', () => {
        projectMobileSlider.go(`=${index}`);
    });
})



function setSliderInfo (){
    const info = Object.values(projectsSliderInfo [projectMobileSlider.index]);  
    projectsSliderItems.forEach( (p, index) => {
        p.innerText = info[index];
    })  
}

function setActiveName (){
    projectNameElements.forEach( (element, index) => {
        if (projectMobileSlider.index === index){
            element.classList.add('mobile-slider__name--active');
        }else{
            element.classList.remove('mobile-slider__name--active');
        }
    })
}


