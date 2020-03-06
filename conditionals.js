const whichSchool = function (age) {

  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else if (age > 18) {
    return "Lighthouse Labs";
  }
}

age = 15;
console.log("I am " + age + " . Which school should I go to?");
console.log(whichSchool(age));