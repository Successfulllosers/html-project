const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

document.querySelector(".list1").addEventListener("click", () => {
  container.classList.remove("change");
})

document.querySelector(".list2").addEventListener("click", () => {
  container.classList.remove("change");
})

document.querySelector(".list3").addEventListener("click", () => {
  container.classList.remove("change");
})

document.querySelector(".list4").addEventListener("click", () => {
  container.classList.remove("change");
})

document.querySelector(".list5").addEventListener("click", () => {
  container.classList.remove("change");
})


document.querySelector(".reviews-button1").addEventListener("click", () => {
  var reviewsSection = document.getElementById('reviews1');
  if (reviewsSection) {  // Check if the element exists
      if (reviewsSection.style.display === 'none' || reviewsSection.style.display === '') {
          reviewsSection.style.display = 'block';
      } else {
          reviewsSection.style.display = 'none';
      }
  }
});

document.querySelector(".reviews-button2").addEventListener("click", () => {
  var reviewsSection = document.getElementById('reviews2');
  if (reviewsSection) {  // Check if the element exists
      if (reviewsSection.style.display === 'none' || reviewsSection.style.display === '') {
          reviewsSection.style.display = 'block';
      } else {
          reviewsSection.style.display = 'none';
      }
  }
});

document.querySelector(".reviews-button3").addEventListener("click", () => {
  var reviewsSection = document.getElementById('reviews3');
  if (reviewsSection) {  // Check if the element exists
      if (reviewsSection.style.display === 'none' || reviewsSection.style.display === '') {
          reviewsSection.style.display = 'block';
      } else {
          reviewsSection.style.display = 'none';
      }
  }
});


document.querySelector(".form-btn").addEventListener("click", () => {
  alert("Your Contact Details Sent Successfully");
});

document.querySelector(".card-button").addEventListener("click", () => {
  alert("Your Booking is Confirmed");
});


const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});
