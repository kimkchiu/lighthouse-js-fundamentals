function ageCalculator(Name, yearBorn, currentYear) {
  let age = currentYear - yearBorn;

  return Name + " is " + age + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));