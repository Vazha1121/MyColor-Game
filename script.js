let start = document.getElementById("startBtn");
let rgbH = document.getElementById("rgbH1");
let easyClick = document.getElementById("easyBtn");
let hardClick = document.getElementById("hardBtn");
let result = document.getElementById("result");
let reStart = document.getElementById("restart");
let tireebi = document.getElementById("d1");

let colorDiv = document.getElementById("div4");
let kvadratebi = document.querySelectorAll("#rndColor1");
let kvadratRaod = 6;
let fillWithRgb = generateRnd(kvadratRaod);

let pickRgb = pickedRgb();
alert("დააჭირე დაწყებას");
/* startBtn */
easyClick.disabled = true;
hardClick.disabled = true;
reStart.disabled = true;
start.addEventListener("click", function () {
  result.textContent = "Game Started";
  easyClick.disabled = false;
  hardClick.disabled = false;
  reStart.disabled = false;
});
/* easyBtn click */

easyClick.addEventListener("click", function () {
  kvadratRaod = 3;
  fillWithRgb = generateRnd(kvadratRaod);
  pickRgb = pickedRgb();
  rgbH.textContent = pickRgb;
  tireebi.style.display = "none";
  for (let i = 0; i < kvadratebi.length; i++) {
    if (fillWithRgb[i]) {
      kvadratebi[i].style.background = fillWithRgb[i];
    } else {
      kvadratebi[i].style.background = "inherit";
      kvadratebi[i].style.boxShadow = "none";
    }
  }
});

/* hardBtn click */

hardClick.addEventListener("click", function () {
  kvadratRaod = 6;
  fillWithRgb = generateRnd(kvadratRaod);
  pickRgb = pickedRgb();
  rgbH.textContent = pickRgb;
  tireebi.style.display = "none";
  for (let i = 0; i < kvadratebi.length; i++) {
    kvadratebi[i].style.background = fillWithRgb[i];
    kvadratebi[i].style.display = "flex";
    kvadratebi[i].style.boxShadow = "0px 0px 15px 10px purple";
  }
});
/* resetBtn */

reStart.addEventListener("click", function () {
  tireebi.style.display = "none";
  fillWithRgb = generateRnd(kvadratRaod);
  pickRgb = pickedRgb();
  rgbH.textContent = pickRgb;
  for (let i = 0; i < kvadratebi.length; i++) {
    kvadratebi[i].style.background = fillWithRgb[i];
  }
});

/* main logic */

for (let i = 0; i < kvadratebi.length; i++) {
  kvadratebi[i].style.background = fillWithRgb[i];
  pickRgb = pickedRgb();
  kvadratebi[i].addEventListener("click", function () {
    let clicked = this.style.background;

    if (pickRgb === clicked) {
      result.textContent = "You Win!";
      result.style.background = "green"
      colorChng(clicked);
    } else {
      this.style.background = "inherit";
      this.style.boxShadow = "none"
      result.textContent = "You Lose!";
      result.style.background = "red"
    }
  });
}

function colorChng(peri) {
  for (let i = 0; i < kvadratebi.length; i++) {
    kvadratebi[i].style.background = peri;
  }
}

function generateRnd(raod) {
  let divArr = [];

  for (let i = 0; i < raod; i++) {
    divArr.push(rndColor());
  }
  return divArr;
}

function rndColor() {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);

  return "rgb(" + R + ", " + G + ", " + B + ")";
}

function pickedRgb() {
  let rnd = Math.floor(Math.random() * fillWithRgb.length);

  return fillWithRgb[rnd];
}
