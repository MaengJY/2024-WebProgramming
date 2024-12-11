/** Promise */
/*
fetch('https://api.upbit.com/v1/market/all')
    .then(function (response) {
        return response.json();
    })
    // .then((response) => {
    //     return response.json()
    // })
    // .then(response => response.json())
    .then(json => console.log(json));
*/

function fetchTicker() {
    fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log("비트코인 현재가격", json[0].trade_price);
      console.log("이더리움 현재가격", json[1].trade_price);
      document.querySelector('#priceBTC').innerHTML = json[0].trade_price;
      document.querySelector('#priceETH').innerHTML = json[1].trade_price;
    });
}

// 1000ms (1초) 간격으로 실행
// let hInterval = setInterval(function () {
//   // 시세 현재가 조회
//   fetchTicker();
// }, 2000);

// 인터벌 종료
// clearInterval(hInterval);

// setTimeout(() => {
//     console.log('5000ms 가 지났어!');
// }, 5000);

/** Callback Hell */
// btn.addEventListener("click", function() {
//     btn.addEventListener("click", function() {
//         btn.addEventListener("click", function() {
//             btn.addEventListener("click", function() {
//                 btn.addEventListener("click", function() {
//                     btn.addEventListener("click", function() {
//                         btn.addEventListener("click", function() {
//                             btn.addEventListener("click", function() {

//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });
