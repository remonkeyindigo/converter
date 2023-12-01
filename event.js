var km, mile, feet, meter;
let inputtype, inputval, outputtype, inputvalue, inputvalue4, inputvalue3;

function keyup() {
  inputtype = sinput.value;
  outputtype = sanswer.value;
  console.log(inputtype);
  inputvalue = document.getElementById("inputval").value;
  inputvalue2 = document.getElementById("inputval2").value;
  inputvalue3 = document.getElementById("inputval3").value;
  inputvalue4 = document.getElementById("inputval4").value;

  if (sinput.value == "km") {
    if (sanswer.value == "meter") {
      document.getElementById("answer").value = inputvalue * 1000;
    }
  }
  if (sinput.value == sanswer.value) {
    document.getElementById("answer").value = inputvalue;
  }
  if (sinput.value == "meter") {
    if (sanswer.value == "km") {
      document.getElementById("answer").value = inputvalue / 1000;
    }
  }
  if (sinput.value == "feet") {
    if (sanswer.value == "meter") {
      document.getElementById("answer").value = inputvalue * 3.28084;
    }
  }
  if (sinput.value == "meter") {
    if (sanswer.value == "feet") {
      document.getElementById("answer").value = inputvalue * 0.3048;
    }
  }
  if (sinput.value == "feet") {
    if (sanswer.value == "km") {
      document.getElementById("answer").value = inputvalue * 0.0003048;
    }
  }
  if (sinput.value == "km") {
    if (sanswer.value == "feet") {
      document.getElementById("answer").value = inputvalue * 3280.84;
    }
  }
  if (sinput.value == "mile") {
    if (sanswer.value == "feet") {
      document.getElementById("answer").value = inputvalue * 5280;
    }
  }
  if (sinput.value == "feet") {
    if (sanswer.value == "mile") {
      document.getElementById("answer").value = inputvalue * 0.000189394;
    }
  }
  if (sinput.value == "km") {
    if (sanswer.value == "mile") {
      document.getElementById("answer").value = inputvalue * 0.621371;
    }
  }
  if (sinput.value == "mile") {
    if (sanswer.value == "km") {
      document.getElementById("answer").value = inputvalue * 1.60934;
    }
  }
  if (sinput.value == "meter") {
    if (sanswer.value == "mile") {
      document.getElementById("answer").value = inputvalue * 0.000621371;
    }
  }
  if (sinput.value == "mile") {
    if (sanswer.value == "meter") {
      document.getElementById("answer").value = inputvalue * 1609.34;
    }
  }
  if (sinput2.value == "atm") {
    if (sanswer2.value == "pa") {
      document.getElementById("answer2").value = (inputvalue2 * 101325).toFixed(9);
    }
  }
  if (sinput2.value == "pa") {
    if (sanswer2.value == "atm") {
      document.getElementById("answer2").value = (inputvalue2 / 101325).toFixed(9);
    }
  }
  if (sinput2.value == sanswer2.value) {
    document.getElementById("answer2").value = inputvalue2;
  }

  if (sinput2.value == "bar") {
    if (sanswer2.value == "pa") {
      document.getElementById("answer2").value = inputvalue2 * 100000;
    }
  }
  if (sinput2.value == "pa") {
    if (sanswer2.value == "bar") {
      document.getElementById("answer2").value = inputvalue2 / 100000;
    }
  }
  if (sinput2.value == "bar") {
    if (sanswer2.value == "psi") {
      document.getElementById("answer2").value = inputvalue2 * 14.5038;
    }
  }
  if (sinput2.value == "psi") {
    if (sanswer2.value == "bar") {
      document.getElementById("answer2").value = inputvalue2 / 14.5038;
    }
  }
  if (sinput2.value == "pa") {
    if (sanswer2.value == "psi") {
      document.getElementById("answer2").value = (inputvalue2 * 0.000145038).toFixed(9);
    }
  }
  if (sinput2.value == "psi") {
    if (sanswer2.value == "pa") {
      document.getElementById("answer2").value = (inputvalue2 / 0.000145038).toFixed(9);
    }
  }
  if (sinput2.value == "psi") {
    if (sanswer2.value == "atm") {
      document.getElementById("answer2").value = (inputvalue2 * 0.068046).toFixed(9);
    }
  }
  if (sinput2.value == "atm") {
    if (sanswer2.value == "psi") {
      document.getElementById("answer2").value = (inputvalue2 / 0.068046).toFixed(9);
    }
  }
  if (sinput2.value == "atm") {
    if (sanswer2.value == "bar") {
      document.getElementById("answer2").value = (inputvalue2 * 1.01325).toFixed(9);
    }
  }
  if (sinput2.value == "bar") {
    if (sanswer2.value == "atm") {
      document.getElementById("answer2").value = (inputvalue2 / 1.01325).toFixed(9);
    }
  }




  if (sinput3.value == "kg") {
    if (sanswer3.value == "g") {
      document.getElementById("answer3").value = (inputvalue3 * 1000).toFixed(9);
    }
  }
  if (sinput3.value == "g") {
    if (sanswer3.value == "kg") {
      document.getElementById("answer3").value = (inputvalue3 / 1000).toFixed(9);
    }
  }
  if (sinput3.value == "pound") {
    if (sanswer3.value == "kg") {
      document.getElementById("answer3").value = (inputvalue3 * 0.453592).toFixed(9);
    }
  }
  if (sinput3.value == "kg") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 / 0.453592).toFixed(9);
    }
  }
  if (sinput3.value == "pound") {
    if (sanswer3.value == "g") {
      document.getElementById("answer3").value = (inputvalue3 * 453.592).toFixed(9);
    }
  }
  if (sinput3.value == "g") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 / 453.592).toFixed(9);
    }
  }
  if (sinput3.value == "g") {
    if (sanswer3.value == "stone") {
      document.getElementById("answer3").value = (inputvalue3 * 0.000157473).toFixed(9);
    }
  }
  if (sinput3.value == "stone") {
    if (sanswer3.value == "g") {
      document.getElementById("answer3").value = (inputvalue3 / 0.000157473).toFixed(9);
    }
  }
  if (sinput3.value == "kg") {
    if (sanswer3.value == "stone") {
      document.getElementById("answer3").value = (inputvalue3 * 0.157473).toFixed(9);
    }
  }
  if (sinput3.value == "stone") {
    if (sanswer3.value == "kg") {
      document.getElementById("answer3").value = (inputvalue3 / 0.157473).toFixed(9);
    }
  }
  if (sinput3.value == "stone") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 * 14).toFixed(9);
    }
  }
  if (sinput3.value == "stone") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 / 14).toFixed(9);
    }
  }
  if (sinput3.value == "stone") {
    if (sanswer3.value == "ounce") {
      document.getElementById("answer3").value = (inputvalue3 * 224).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "stone") {
      document.getElementById("answer3").value = (inputvalue3 / 224).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "g") {
      document.getElementById("answer3").value = (inputvalue3 * 28.3495).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "g") {
      document.getElementById("answer3").value = (inputvalue3 / 28.3495).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "kg") {
      document.getElementById("answer3").value = (inputvalue3 * 0.028349500000294).toFixed(9);
    }
  }
  if (sinput3.value == "kg") {
    if (sanswer3.value == "ounce") {
      document.getElementById("answer3").value = (inputvalue3 / 0.028349500000294).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 * 0.0625).toFixed(9);
    }
  }
  if (sinput3.value == "ounce") {
    if (sanswer3.value == "pound") {
      document.getElementById("answer3").value = (inputvalue3 / 0.0625).toFixed(9);
    }
  }
  if (sinput3.value == "pound") {
    if (sanswer3.value == "stone") {
      document.getElementById("answer3").value = (inputvalue3 * 0.0714286).toFixed(9);
    }
  }
  if (sinput3.value == "pound") {
    if (sanswer3.value == "stone") {
      document.getElementById("answer3").value = (inputvalue3 / 0.0714286).toFixed(9);
    }
  }


  if (sinput4.value == "celcius") {
    if (sanswer4.value == "kelvin") {
      document.getElementById("answer4").value = (inputvalue4 - (-273.15));
    }
  }
  if (sinput4.value == "kelvin") {
    if (sanswer4.value == "celcius") {
      document.getElementById("answer4").value = (inputvalue4 - 273.15).toFixed(9);
    }
  }
  if (sinput4.value == sanswer4.value) {
    document.getElementById("answer4").value = inputvalue4;
  }
}
