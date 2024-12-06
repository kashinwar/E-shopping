
//womens2
// Get our carousel elements
 const carousel = document.querySelector('.carousel');
 const carouselInner = document.querySelector('.carousel-inner');
 const carouselItems = document.querySelectorAll('.carousel-item');
 const prevButton = document.querySelector('.carousel-button.prev');
 const nextButton = document.querySelector('.carousel-button.next');

 // Set the current slide index
 let currentIndex = 0;

 // Add event listeners to our navigation buttons
 prevButton.addEventListener('click', () => {
     currentIndex--;
     if (currentIndex < 0) {
         currentIndex = carouselItems.length - 1;
     }
     updateCarousel();
 });

 nextButton.addEventListener('click', () => {
     currentIndex++;
     if (currentIndex >= carouselItems.length) {
         currentIndex = 0;
     }
     updateCarousel();
 });

 // Update the carousel based on the current index
 function updateCarousel() {
     carouselItems.forEach((item, index) => {
         item.classList.remove('active');
         if (index === currentIndex) {
             item.classList.add('active');
         }
     });
 }
//womens2 end



AOS.init();