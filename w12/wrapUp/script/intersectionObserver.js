// root는 어느 창을 기준으로 할지를 정하는건데 보통 브라우저의 화면을 기준으로 해서 null로 설정한다.
// rootMargin은 화면에 어느 정도부터 등장하는지에 따라 반응을 할지 말지 정하는 것..? 영상보면 알어,, 보통 0px
// threshold는 어떤 순간에 인터섹션 오브서버가 등장하게 할 것인가? 1.0은 다 등장, 0.5는 절반 등장, 0은 아예 등장하지 않았을 때.
// observerOption은 무조건 이대로 적용되어야혀
let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

// function observerCallback() {} 아래꺼나 이거나 똑같은데 요즘 트렌드는 아래꺼
let observerCallback = (observingTargets) => {
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

// new IntersectionObserver (조건에 부합할 때 실행시킬 함수, 옵션);
let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);
// observer.observe(HTML요소-하나를 넣어야 함);

// 하드코딩
// observer.observe(elems[0]);
// observer.observe(elems[1]);
// observer.observe(elems[2]);
// observer.observe(elems[3]);

// 좀 똑똑한 코딩
// // for(let idx = 0; idx < elems.length; idx++) {
// //     observer.observe(elems[idx]);
// // }

// 있어보이는 코딩
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
elems.forEach((eachElem) => {
  observer.observe(eachElem);
});
