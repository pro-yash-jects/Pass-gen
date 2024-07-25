let pass = "";
text = "";
//Generating the password
function check(){
  document.getElementById("numbers").checked=!(document.getElementById("numbers").checked)
 }
function f1() {
  var ch = [
    "@",
    "#",
    "$",
    "&",
    "*",
    "~",
    "%",
    "^",
    "!",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const l = document.getElementById("length").value;
  var s = document.getElementById("special").checked;
  var n = document.getElementById("numbers").checked;
  if (s && !n) {
    ch.splice(9, 10);
  } else if (!s && n) {
    ch.splice(0, 9);
  } else if (!s && !n) {
    ch.splice(0, 19);
  }
  c = ch.length;
  for (let i = 0; i < l; i++) {
    let r = parseInt(c * Math.random());
    pass += ch[r];
  }
  console.log(pass);
  show();
}
//Display after generating the password
function show() {
  document.getElementById("r").innerHTML = "Your password is: "
  document.getElementById("rp").innerHTML = pass;
  var b = document.getElementById("result-btn");
  b.style.display = "inline";
  text = pass;
  pass = "";
}
//Copy to clipboard
const copy = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
  alert("Copied to clipboard");
};
