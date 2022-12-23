const ratingForm = document.querySelector('.rating-form');
const ratingBtns = document.querySelectorAll('.rating-btn');
const submitBtn = document.querySelector('.submit-btn');
const ratingContainer = document.querySelector('.rating-container');
const thankContainer = document.querySelector('.ty-container');
const resetBtn = document.querySelector('.reset-btn');
const rating = document.querySelector('#rating');

// Disable the submit button by default
submitBtn.disabled = true;

ratingBtns.forEach((ratingBtn, index) => {
    ratingBtn.addEventListener('click', () => {
        if (ratingBtn.value !== '') {
            // Enable the submit button
            submitBtn.disabled = false;
            updateRating(index);
          } else {
            // Disable the submit button
            submitBtn.disabled = true;
          }
    });
});

function updateRating(index) {
    ratingBtns.forEach((ratingBtn, idx) => {
        if (idx == index) {
            ratingBtn.classList.add('active');
            rating.textContent = ratingBtn.value;

        } else {
            ratingBtn.classList.remove('active');
        }
    })
}

submitBtn.addEventListener('click', () => {
    submitBtn.disabled = false;
    thankContainer.classList.remove('hidden');
    ratingContainer.classList.add('hidden');
})

resetBtn.addEventListener('click', () => {
    thankContainer.classList.add('hidden');
    ratingContainer.classList.remove('hidden');
    ratingBtns.forEach((ratingBtn, idx) => {
        ratingBtn.classList.remove('active');
    })
});



    
   


        

