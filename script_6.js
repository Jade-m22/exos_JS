const proteines = [
  {codons : ["UCU" ,"UCC" ,"UCA", "UCG", "AGU", "AGC"], nom: "Sérine"},
  {codons : ["CCU", "CCC",  "CCA",  "CCG"], nom: "Proline"},
  {codons : ["UUA", "UUG"], nom: "Leucine"},
  {codons : ["UUU", "UUC"], nom:"Phénylalanine"},
  {codons : ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"], nom:"Arginine"},
  {codons : ["UAU", "UAC"], nom: "Tyrosine"}
  ]

let firstArn = "CCGUCGUUGCGCUACAGC"
let secondArn = "CCUCGCCGGUACUUCUCG"

let firstCodon = firstArn.match(/.{1,3}/g);
let secondCodon = secondArn.match(/.{1,3}/g);

let firstProteins = firstCodon.map(codon => {
  let protein = proteines.find(p => p.codons.includes(codon));
  return protein ? protein.nom : "Inconnu";
});
console.log(firstCodon);
console.log(firstProteins);

let secondProteins = secondCodon.map(codon => {
  let protein = proteines.find(p => p.codons.includes(codon));
  return protein ? protein.nom : "Inconnu";
});
console.log(secondCodon);
console.log(secondProteins);