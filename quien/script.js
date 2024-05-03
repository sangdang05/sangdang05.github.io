let str = "Quyen Quyen";
let str2 = str.repeat(3200)
console.log(str2)
// document.getElementById("txt").innerHTML = str2;

var i = 0;
var speed = 0;

typeWriter = () => {
  if (i < str2.length) {
    document.getElementById("txt").innerHTML += str2.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
