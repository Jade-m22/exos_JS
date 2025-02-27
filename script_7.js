function acneBot() {
  let userInput = prompt("Parle au bot ado :");

  if (!userInput || userInput.trim() === "") {
    console.log("t'es en PLS ?");
    return;
  }
  if (userInput.endsWith("?")) {
    console.log("Ouais Ouais...");
    return;
  }
  if (userInput === userInput.toUpperCase() && userInput.match(/[A-Z]/)) {
    console.log("Pwa, calme-toi...");
    return;
  }
  if (userInput.toLowerCase().includes("fortnite")) {
    console.log("on s' fait une partie soum-soum ?");
    return;
  }
  console.log("balek.");
}

acneBot();