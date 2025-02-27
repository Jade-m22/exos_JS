let chooseNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
let factorielle = 1;
for(let count = 1 ; count <= chooseNumber ; count ++) {
  console.log(`${count}`);
  factorielle *= count;
}
console.log(`La factorielle de ${chooseNumber} est ${factorielle}`);
