const jokeEl = document.getElementById("joke-container");
const btnEl = document.getElementById("btn");

generateJokes();

btnEl.addEventListener("click", generateJokes);

async function generateJokes() {
  const header = {
    headers: {
      "Accept": "application/json",
    },
  };

  const result = await fetch("https://icanhazdadjoke.com", header);

  console.log(result);

  const data = await result.json();

  console.log(data);
  jokeEl.innerHTML = data.joke;
}

