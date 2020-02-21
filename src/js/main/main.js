const glideConfig = {
    type: 'carousel',
    startAt: 2,
    perView: 5,
    focusAt: 'center',
    gap: 20,
    breakpoints:{
      1024:{
        perView:2,
      }
  }
};


const mobileSliderConfig = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 'center',
    gap: 20
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
]


let projectsSliderItems = document.querySelectorAll('.project-carousel__desc');

const projectMobileSlider = new Glide('.projects__slider', mobileSliderConfig );

projectMobileSlider.on(['mount.after', 'run'], () => {
    setSliderInfo();
})

projectMobileSlider.mount();

const galleryMobileSlider = new Glide('.gallery__slider', mobileSliderConfig ).mount();

function setSliderInfo (){
    const info = Object.values(projectsSliderInfo [projectMobileSlider.index]);  
    projectsSliderItems.forEach( (p, index) => {
        p.innerText = info[index];
    })  
}


