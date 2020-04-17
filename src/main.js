import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Age } from './Age';

function display(age, expAge) {
  $(".output").show();
  const planetName = $(".planet-name");
  const planetAge = $(".planet-age");
  const planetExpAge = $(".planet-exp-age");
  planetName.text("Mercury");
  planetAge.text(age);
  planetExpAge.text(expAge);
}

//UI logic only mercury
$(document).ready(function () {
  $("#mercury-age").click(function () {
    event.preventDefault();
    let userAge = $("#current-age").val();
    let expectedAge = $("#expected-age").val();
    let age = new Age(userAge, expectedAge);
    console.log(age);
    age.mercuryAge(userAge);
    let mercAge = age.mercuryAge(userAge);
    age.mercuryExpectancy(expectedAge);
    let mercExpOrPastYears = age.yearsExpectedOrPastInMercury();
    display(mercAge, mercExpOrPastYears);
  });
});

