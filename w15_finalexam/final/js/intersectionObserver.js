let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

let observerScroll = (observingTargets) => {
  observingTargets.forEach(
    (eachobservingTarget) => {
      if (eachobservingTarget.isIntersercting) {
        eachobservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachobservingTarget.target.classList.remove(
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
