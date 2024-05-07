const ACTIVECLASS = "active";
const IMAGES = document.querySelectorAll(".slider");

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
  const element = document.querySelector(`.${ACTIVECLASS}`);
  if (element) {
    element.classList.remove(ACTIVECLASS);
  }
}

function addActiveClass($event) {
  $event.stopPropagation();
  removeActiveClass();
  const target = $event.currentTarget;
  target.classList.add(ACTIVECLASS);
}

IMAGES.forEach((image) => {
  image.addEventListener("click", addActiveClass);
});
