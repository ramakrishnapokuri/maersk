let numbers = [
  { number: 1, color: "#72C3DC" },
  { number: 2, color: "#2B8EAD" },
  { number: 3, color: "#2F454E" },
  { number: 4, color: "#2B8EAD" },
  { number: 5, color: "#2F454E" },
  { number: 6, color: "#BFBFBF" },
  { number: 7, color: "#BFBFBF" },
  { number: 8, color: "#6F98A8" },
  { number: 9, color: "#2F454E" },
];

Array.prototype.shuffle = function () {
  var i = this.length,
    j,
    temp;
  if (i == 0) return this;
  while (--i) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }
  return this;
};

/**
 * Show numbers
 */
function showNumbers() {
  let numbreDiv = document.getElementById("divNumbers");
  numbreDiv.innerHTML = "";
  numbers.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = item.number;
    div.style = `background-color:${item.color}; border-color:${item.color}`;
    div.className = "col-sm-4 box";
    numbreDiv.appendChild(div);
  });
}

/**
 * shuffle numbers
 */
function onShuffle() {
  disableSortButton(false);
  numbers = numbers.shuffle();
  showNumbers();
}

/**
 * sort numbers
 */
function sort() {
  numbers = numbers.sort((a, b) => a.number - b.number);
  showNumbers();
  disableSortButton(true);
}

function disableSortButton(disabled) {
  document.getElementById("btnSort").disabled = disabled;
}
