let aCard = document.querySelector(".card");
console.log(aCard);
// 괄호에 들어 있는 글,,보통 e를 쓴다
aCard.onclick = (e) => {
  console.log("target", e.target);
  console.log("currentTarget", e.currentTarget);
  e.currentTarget.classList.toggle(
    "card-selected"
  );
};

// // document는 js가 불러와진 그 곳.
// let elem = document.getElementById("card1");
// elem. onclick = {elem .classList .toggle("card-selection")}
//   wlwm.onclick = function () {}
