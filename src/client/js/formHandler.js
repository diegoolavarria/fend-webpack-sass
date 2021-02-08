const openWeatherMapApiKey = "85acd1ad547c2be25d0cfa4fdfe3a744";
const openWeatherMapUrl =
  "https://api.openweathermap.org/data/2.5/weather?zip=";
const suffixUrl = "&units=metric";

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => {
      return res.json();
    })
    .then(function (data) {
      document.getElementById("results").innerHTML = data.message;
    });
}

async function submitAPI(event) {
  const url = `${openWeatherMapUrl}49040,us&appid=${openWeatherMapApiKey}${suffixUrl}`;

  const response = await fetch(url);
  try {
    const newData = await response.json();
    document.getElementById("apiresult").innerHTML = newData.name;

    return newData;
  } catch (error) {
    console.log("error", error);
  }
}

export { handleSubmit, submitAPI };
