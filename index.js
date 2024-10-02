var kepektomb1 = [
  "hote-szeleta-fotok-kulso100.jpg",
  "hote-szeleta-fotok-kulso101.jpg",
  "hote-szeleta-fotok-kulso102.jpg",
  "hote-szeleta-fotok-kulso103.jpg",
  "hote-szeleta-fotok-kulso104.jpg",
  "hote-szeleta-fotok-kulso105.jpg",
  "hote-szeleta-fotok-kulso106.jpg",
  "hote-szeleta-fotok-kulso107.jpg",
  "hote-szeleta-fotok-kulso108.jpg",
  "hote-szeleta-fotok-kulso109.jpg",
  "hote-szeleta-fotok-kulso110.jpg",
  "hote-szeleta-fotok-kulso111.jpg",
  "hote-szeleta-fotok-kulso112.jpg",
  "hote-szeleta-fotok-kulso113.jpg",
];
kepektomb2 = [
  "hotel-szeleta-fotok-belso100.jpg",
  "hotel-szeleta-fotok-belso101.jpg",
  "hotel-szeleta-fotok-belso102.jpg",
  "hotel-szeleta-fotok-belso103.jpg",
  "hotel-szeleta-fotok-belso104.jpg",
  "hotel-szeleta-fotok-belso105.jpg",
  "hotel-szeleta-fotok-belso106.jpg",
  "hotel-szeleta-fotok-belso107.jpg",
];
kepektomb4 = [
  "2010-09-20-025-1024x768-e1288795442385.jpg",
  "bicikli-e1377803607210.jpg",
  "hote-szeleta-fotok-kornyezet100.jpg",
  "hote-szeleta-fotok-kornyezet100.jpg",
  "hote-szeleta-fotok-kornyezet101.jpg",
  "hote-szeleta-fotok-kornyezet103.jpg",
  "hote-szeleta-fotok-kornyezet104.jpg",
  "hote-szeleta-fotok-kornyezet105.jpg",
  "hote-szeleta-fotok-kornyezet106.jpg",
  "hote-szeleta-fotok-kornyezet107.jpg",
  "hote-szeleta-fotok-kornyezet108.jpg",
  "hote-szeleta-fotok-kornyezet109.jpg",
  "hote-szeleta-fotok-kornyezet110.jpg",
  "hote-szeleta-fotok-kornyezet111.jpg",
  "hote-szeleta-fotok-kornyezet108.jpg",
  "hote-szeleta-fotok-kornyezet112.jpg",
];
kepektomb3 = [
  "hotel-szeleta-fotok-szolgaltatasok100.jpg",
  "hotel-szeleta-fotok-szolgaltatasok101.jpg",
  "hotel-szeleta-fotok-szolgaltatasok102.jpg",
  "hotel-szeleta-fotok-szolgaltatasok103.jpg",
  "hotel-szeleta-fotok-szolgaltatasok104.jpg",
  "hotel-szeleta-fotok-szolgaltatasok105.jpg",
  "hotel-szeleta-fotok-szolgaltatasok107.jpg",
  "hotel-szeleta-fotok-szolgaltatasok108.jpg",
  "hotel-szeleta-fotok-szolgaltatasok109.jpg",
  "hotel-szeleta-fotok-szolgaltatasok100.jpg",
  "hotel-szeleta-fotok-szolgaltatasok120.jpg",
  "hotel-szeleta-fotok-szolgaltatasok111.jpg",
  "hotel-szeleta-fotok-szolgaltatasok112.jpg",
  "hotel-szeleta-fotok-szolgaltatasok113.jpg",
  "hotel-szeleta-fotok-szolgaltatasok114.jpg",
  "hotel-szeleta-fotok-szolgaltatasok123.jpg",
  "hotel-szeleta-fotok-szolgaltatasok116.jpg",
  "hotel-szeleta-fotok-szolgaltatasok117.jpg",
  "hotel-szeleta-fotok-szolgaltatasok118.jpg",
  "hotel-szeleta-fotok-szolgaltatasok124.jpg",
];
var i = 0;
document.getElementById("kepide1").src = kepektomb1[4];
document.getElementById("kepide2").src = kepektomb2[4];
document.getElementById("kepide3").src = kepektomb3[4];
document.getElementById("kepide4").src = kepektomb4[4];

function balra1() {
  console.log("megnyomtad a balra gombot");
  if (i >= kepektomb1.length - 1) {
    i = 0;
    document.getElementById("kepide1").src = kepektomb1[i];
    i++;
  } else {
    document.getElementById("kepide1").src = kepektomb1[i + 1];
    i++;
  }
}
function jobbra1() {
  console.log("most meg a jobbra gombot");
  if (i < 1) {
    i = kepektomb1.length - 1;
    document.getElementById("kepide1").src = kepektomb1[i];
  } else {
    document.getElementById("kepide1").src = kepektomb1[i - 1];
    i--;
  }
}

function balra2() {
  console.log("megnyomtad a balra gombot");
  if (i >= kepektomb2.length - 1) {
    i = 0;
    document.getElementById("kepide2").src = kepektomb2[i];
    i++;
  } else {
    document.getElementById("kepide2").src = kepektomb2[i + 1];
    i++;
  }
}
function jobbra2() {
  console.log("most meg a jobbra gombot");
  if (i < 1) {
    i = kepektomb2.length - 1;
    document.getElementById("kepide2").src = kepektomb2[i];
  } else {
    document.getElementById("kepide2").src = kepektomb2[i - 1];
    i--;
  }
}

function balra3() {
  console.log("megnyomtad a balra gombot");
  if (i >= kepektomb3.length - 1) {
    i = 0;
    document.getElementById("kepide3").src = kepektomb3[i];
    i++;
  } else {
    document.getElementById("kepide3").src = kepektomb3[i + 1];
    i++;
  }
}
function jobbra3() {
  console.log("most meg a jobbra gombot");
  if (i < 1) {
    i = kepektomb3.length - 1;
    document.getElementById("kepide3").src = kepektomb3[i];
  } else {
    document.getElementById("kepide3").src = kepektomb3[i - 1];
    i--;
  }
}

function balra4() {
  console.log("megnyomtad a balra gombot");
  if (i >= kepektomb4.length - 1) {
    i = 0;
    document.getElementById("kepide4").src = kepektomb4[i];
    i++;
  } else {
    document.getElementById("kepide4").src = kepektomb4[i + 1];
    i++;
  }
}
function jobbra4() {
  console.log("most meg a jobbra gombot");
  if (i < 1) {
    i = kepektomb4.length - 1;
    document.getElementById("kepide4").src = kepektomb4[i];
  } else {
    document.getElementById("kepide4").src = kepektomb4[i - 1];
    i--;
  }
}
