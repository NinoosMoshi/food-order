// window.onload = () => {
//   let searchForm = document.querySelector('.search-form');

//   document.querySelector('#search-btn').onclick = () => {
//       searchForm.classList.toggle('active');
//       shoppingCart.classList.remove('active');
//       loginForm.classList.remove('active');
//       navbar.classList.remove('active');
//   }


//   let shoppingCart = document.querySelector('.shopping-cart');

//   document.querySelector('#cart-btn').onclick = () => {
//     shoppingCart.classList.toggle('active');
//     searchForm.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
//   }


//   let loginForm = document.querySelector('.login-form');

//   document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     navbar.classList.remove('active');
//   }

//   let navbar = document.querySelector('.navbar');

//   document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//   }


//   window.onscroll = () => {
//     searchForm.classList.remove('active');
//     shoppingCart.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }


// };


document.addEventListener('DOMContentLoaded', function() {

  let toggleBtn = document.querySelector('.nav-toggler');
  let linksContainer = document.querySelector('.links-container');

  toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      linksContainer.classList.toggle('active');
  });

  // about us review container

  let reviews = document.querySelectorAll('.review-wrapper');
  let currentReviews = [0, 2];

  let updateReviewSlider = (cards) => {
    setTimeout(() => {
      cards.forEach(card_index => {
        reviews[card_index].classList.add('active');
      });
    }, 250);
  };

  setInterval(() => {
    currentReviews.forEach((current_review_card_index, i) => {
      reviews[current_review_card_index].classList.remove('active');
      currentReviews[i] = current_review_card_index >= reviews.length - 1 ? 0 : current_review_card_index + 1;
    });
    updateReviewSlider(currentReviews);
  }, 5000);

  updateReviewSlider(currentReviews);

  // faq

  let faqs = [...document.querySelectorAll('.faq')];

  faqs.map( faq => {
      let ques = faq.querySelector('.question-box');
      ques.addEventListener('click', () => {
          faq.classList.toggle('active');
      });
  });

  // dish slider

  let dishSlider = document.querySelector('.dish-slider');
  let rotationVal = 0;

  setInterval(() => {
      rotationVal += 120;
      dishSlider.style.transform = `translateY(-50%) rotate(${rotationVal}deg)`;
  }, 3000);

  // AOS.init();
});



