import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Age } from './Age';

//UI logic
$(document).ready(function(){
    let userAge = $("#current-age");
    let expectedAge = $("#expected-age");
    let age = new Age(userAge, expectedAge);
    age.mercuryYears(userAge, expectedAge);
    age.mercuryAge(userAge, expectedAge);
    age.mercuryExpectancy(userAge, expectedAge);
    age.yearsExpectedOrPastInMercury(userAge, expectedAge);
    $("#mercury-age").click(function(){
      event.preventDefault();
      $(".output").show();
    });
});

