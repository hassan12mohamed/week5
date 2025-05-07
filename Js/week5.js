//  get slider items
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

//   get number of slide
var slidesCount = sliderImages.length;
// set current slide
var currentSlide = 1;

// slide number string element
var slideNumberElement = document.getElementById("slide-number");
// previous and next buttons

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// handle click on previous and next button
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create the main ul element
var paginationElement = document.createElement("ul");

// set id on create element
paginationElement.setAttribute("id", "pagination-ul");

// create list items

for (var i = 1; i <= slidesCount; i++) {
  // create list items  li
  var paginationItem = document.createElement("li");
  // set id on create element
  paginationItem.setAttribute("data-index", i);

  //set items content
  paginationItem.appendChild(document.createTextNode(i));
  // append items to the main ul list
  paginationElement.appendChild(paginationItem);
}
// add the created ul element  the page
document.getElementById("indicators").appendChild(paginationElement);

// get the new created ul

var paginationCreatedUl = document.getElementById("pagination-ul");
//  get pagination items
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// loop throught all bullets items
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// trigger the checker function
theChecker();

// function next slide
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide++;
    theChecker();
  }
}

// function previous slide
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentSlide--;
    theChecker();
  }
}

// create checker function
function theChecker() {
  // set the slide number
  slideNumberElement.textContent =
    "slide #" + currentSlide + " of " + slidesCount;
  // remove all active classes from imges and pagination bullets
  removeAllActive();

  // set active class on current slide
  sliderImages[currentSlide - 1].classList.add("active");
  // set active class on curreny pagination items
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // check if curret slide is the first
  if (currentSlide == 1) {
    // add disabled class on previous button
    prevButton.classList.add("disabled");
  } else {
    // remove disabled class from previous button
    prevButton.classList.remove("disabled");
  }

  // check if curret slide is the last
  if (currentSlide == slidesCount) {
    // add disabled class on next button
    nextButton.classList.add("disabled");
  } else {
    // remove disabled class from next button
    nextButton.classList.remove("disabled");
  }
}

// remove all active classes from images and pagination bullets
function removeAllActive() {
  // loop through images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // loop through pagination bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
