var wzrost = Math.pow((parseInt(prompt("Podaj swój wzrost w cm")) / 100), 2);
var waga = parseFloat(prompt("Podaj swoją wagę w kg"));

var BMI = Math.round((waga / wzrost) * 10) / 10;
  
if (BMI < 18.5) {
  alert("Twoje BMI jest za niskie, a wynosi ono: " + BMI);
  window.location.reload();
}
else if (BMI > 18.5) {
  alert("Twoje BMI jest za wysokie, a wynosi ono: " + BMI);
  window.location.reload();
}
else if (BMI => 18.5 && BMI <= 25) {
  alert("Twoje BMI jest odpowiednie, a wynosi ono: " + BMI);
  window.location.reload();
}
else {
  alert("Brak danych");
  window.location.reload();
}