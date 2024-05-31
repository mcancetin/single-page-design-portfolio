document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider__container");
  const leftButton = document.querySelector('button[data-direction="left"]');
  const rightButton = document.querySelector('button[data-direction="right"]');
  let currentIndex = 0;

  const scrollSlider = (direction) => {
    const imageWidth = slider.querySelector("img").clientWidth + 30; // 30 is the gap between images
    const totalImages = slider.querySelectorAll("img").length;

    if (direction === "left") {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else if (direction === "right") {
      currentIndex = (currentIndex + 1) % totalImages;
    }

    slider.scrollTo({
      left: currentIndex * imageWidth,
      behavior: "smooth",
    });
  };

  leftButton.addEventListener("click", () => scrollSlider("left"));
  rightButton.addEventListener("click", () => scrollSlider("right"));
});
