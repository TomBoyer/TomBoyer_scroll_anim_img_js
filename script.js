// animation d'une img au scroll de la page --> translate + opacity
// https://www.youtube.com/watch?v=SkheRkXbQuQ&ab_channel=LeDesignerduWeb-%C3%89coleduWeb

const slidingNewsletter = document.querySelector(".slide-in");

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight } = document.documentElement;

  const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

  if (
    scrollTop >
    (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.7
  ) {
    slidingNewsletter.classList.add("active");
  }
});
