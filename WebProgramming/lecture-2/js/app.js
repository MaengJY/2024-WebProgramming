var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const btnGetGPS = document.querySelector("#btnGetGPS");
btnGetGPS.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(success, error, options);
});

const btnWrite = document.querySelector("#btnWrite");
const btnRead = document.querySelector("#btnRead");
btnWrite.addEventListener("click", function () {
  // localStorage.setItem('rememberId', '20232323');
  sessionStorage.setItem("rememberId", "20232323");
});

btnRead.addEventListener("click", function () {
  // console.log(localStorage.getItem('rememberId'));
  // localStorage.removeItem('rememberId');

  console.log(sessionStorage.getItem("rememberId"));
  sessionStorage.removeItem("rememberId");
});

const btnCookie = document.querySelector("#btnCookie");
btnCookie.addEventListener("click", function () {
  const day = 24 * 60 * 60 * 1000;

  cookieStore
    .set({
      name: "cookie1",
      value: "cookie1-value",
      expires: Date.now() + day,
      domain: "127.0.0.1",
    })
    .then(
      () => {
        console.log("It worked!");
      },
      (reason) => {
        console.error("It failed: ", reason);
      }
    );
});

const text =
  "An obscure body in the S-K System, your majesty. The inhabitants refer to it as the planet Earth.";

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8); // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string
  return hashHex;
}

digestMessage(text).then((digestHex) => console.log(digestHex));