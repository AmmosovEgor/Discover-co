let H = window.screen.availHeight;
let MapH = H-200;
function mapSize(argument) {
document.querySelector(".map").style.height = MapH + "px";
}
mapSize();