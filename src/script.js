(function () {
  const convert = document.querySelector("#convert");

  function convertToMile() {
    document.querySelector("h1").innerHTML = "KILOMETERS TO MILES CONVERTER";
    document.querySelector("#description").innerHTML =
      "Type in a number of kilometers and click the button to convert the distance to miles.";
    convert.addEventListener("submit", function (event) {
      event.preventDefault();
      let kilometers = parseFloat(document.querySelector("#distance").value);
      if (kilometers) {
        let miles = (kilometers / 1.609).toFixed(3);
        document.querySelector(
          "#answer"
        ).innerHTML = `${kilometers} kilometers converts to ${miles} miles`;
      } else {
        alert("Enter a number!");
      }
    });
  }

  function convertToKilometer() {
    document.querySelector("h1").innerHTML = "MILES TO KILOMETERS CONVERTER";
    document.querySelector("#description").innerHTML =
      "Type in a number of miles and click the button to convert the distance to kilometers.";
    convert.addEventListener("submit", function (event) {
      event.preventDefault();
      let miles = parseFloat(document.querySelector("#distance").value);
      if (miles) {
        let kilometers = (miles * 1.609).toFixed(3);
        document.querySelector(
          "#answer"
        ).innerHTML = `${miles} miles converts to ${kilometers} kilometers`;
      } else {
        alert("Enter a number!");
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    let key = event.key;
    convertToKilometer();

    switch (key) {
      case "K":
        convertToKilometer();

        break;

      case "M":
        convertToMile();
        break;
    }
  });
})();
