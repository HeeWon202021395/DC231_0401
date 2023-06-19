let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

let observerScroll = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

// 관찰자
let observer = new IntersectionObserver(
  observerScroll,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);

console.log(elems);

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
// elems.forEach((eachElem) => {
//   observer.observe(eachElem);
// });
