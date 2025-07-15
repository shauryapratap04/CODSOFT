let screen = document.getElementById("screen");

function addValue(val) {
  screen.value += val;
}

function clearAll() {
  screen.value = "";
}

function deleteOne() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch (err) {
    screen.value = "Error";
  }
}


