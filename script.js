const passwords = ["რლენ4მუათ", "8 13 21 34", "e8", "ცივი ომი", "0"];

document.getElementById("submit").addEventListener("click", function() {
  let inputs = [];
  inputs.push(document.getElementById("password1").value);
  inputs.push(document.getElementById("password2").value);
  inputs.push(document.getElementById("password3").value);
  inputs.push(document.getElementById("password4").value);
  inputs.push(document.getElementById("password5").value);

  if (inputs.every(input => passwords.includes(input))) {
    document.getElementById("message").innerHTML = "სწორია";
  } else {
    document.getElementById("message").innerHTML = "ზოგი პაროლი არასწორია";
  }
});