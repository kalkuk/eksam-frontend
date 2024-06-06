window.onload = function () { 
    let slides =  
        document.getElementsByClassName('carousel-item'); 
  
    function showSlide(slide) { 
        slide.classList.remove('hidden'); 
    } 
  
    function hideSlide(slide) { 
        slide.classList.add('hidden'); 
    } 
  
    showSlide(slides[0]); 
    setInterval(function () { 
        for (let i = 0; i < slides.length; i++) { 
            if (i + 1 == slides.length) { 
                setTimeout(showSlide, 800, slides[0]);
                setTimeout(hideSlide, 800, slides[i]); 
                break; 
            } 
            if (!slides[i].classList.contains('hidden')) { 
                setTimeout(showSlide, 800, slides[i + 1]);
                setTimeout(hideSlide, 800, slides[i]); 
                break; 
            } 
        } 
    }, 1500); 
};