const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];
  
  document.getElementById('submitReview').addEventListener('click', addReview);
  
  function addReview() {
    const reviewInput = document.getElementById('reviewInput');
    const reviewText = reviewInput.value.trim();
    try {
      if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error('Review must be between 50 and 500 characters');
      }
      displayReview(reviewText);
      reviewInput.value = '';
    } catch (error) {
      alert(error.message);
    }
  }
  
  function displayReview(text) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'review';
    reviewDiv.textContent = text;
    reviewsContainer.appendChild(reviewDiv);
  }
  
  // Initial load of reviews
  function loadInitialData(data) {
    const reviewsContainer = document.getElementById('reviewsContainer');
    data.forEach(product => {
      product.reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review';
        reviewDiv.textContent = review.text;
        reviewsContainer.appendChild(reviewDiv);
      });
    });
  }
  
  loadInitialData(initialData);
  