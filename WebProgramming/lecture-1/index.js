let handsomeList = ["차은우", "장동건", "원빈", "현빈", "박종진"];

// document.getElementById("asdasd")
let ulWellFaceList = document.querySelector("#wellFaceList");
// ulWellFaceList.innerHTML = "<li>" + handsomeList[0] + "</li>";
// ulWellFaceList.innerHTML += "<li>" + handsomeList[1] + "</li>";
// ulWellFaceList.innerHTML += "<li>" + handsomeList[2] + "</li>";

let btnSample = document.querySelector("#sampleButton");
btnSample.addEventListener("click", function () {
  ulWellFaceList.innerHTML = "";
  for (let i = 0; i < handsomeList.length; i++) {
    // ulWellFaceList.innerHTML += "<li>" + handsomeList[i] + "</li>";
    ulWellFaceList.innerHTML += `<li>${handsomeList[i]}</li>`;
  }
  window.alert("업데이트 완료!");
});

console.log(document);

let sampleImage = document.querySelector("#sampleImage");
let btnChangeImage = document.querySelector("#changeImageButton");
btnChangeImage.addEventListener('click', function(e) {
    console.log(e);
    sampleImage.src = "./Hansei_university.jpg";
});

let textInput = document.querySelector("#textInput");
textInput.addEventListener("input", function(event) {
    console.log(event.data);
});