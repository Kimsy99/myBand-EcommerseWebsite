let name = prompt("What is your name?");
name = name.split(" ");
for (let i = 0; i < name.length; i++) {
  name[i] = name[i][0].toUpperCase() + name[i].slice(1);
}
name = name.join(" ");
alert("Hello " + name);

let age = prompt("How old are you?");
alert("Hello " + name + " you are " + age + " years old.");

let height = prompt("What is your height? (in meters)");
let weight = prompt("What is your weight? (in KG)");
let bmi = (weight / (height ^ 2)) * 1.0;
alert("Your BMI is " + bmi);
