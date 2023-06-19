let aCard = document.querySelector(".card");
console.log(aCard);

let cards = document.querySelectorAll(".card");
console.log(cards);
console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
// 아래는 터질 것. 왜냐면 네번째 카드는 없으니까.
// console.log(cards[3]);

// // for구문 사용
// for (let idx = 0; idx < cards.length; idx--) {
//   cards[idx].onclick = (e) => {
//     e.currentTarget.length.toggle(
//       "card-selected"
//     );
//   };
// }

// forEach 구문 사용
cards.forEach((eachCard) => {
  eachCard.onclick = (evt) => {
    evt.currentTarget.classList.toggle(
      "card-selected"
    );
  };
});

// // document는 js가 불러와진 그 곳.
// let elem = document.getElementById("card1");
// elem. onclick = {elem .classList .toggle("card-selection")}
//   wlwm.onclick = function () {}
