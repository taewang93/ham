const $block_boxWrap = document.querySelector(".block_box_wrap");
const $layer = document.querySelector(".block_box_layer");
const $box1 = document.querySelector(".block_box_box1");
const $box2 = document.querySelector(".block_box_box2");
const $box3 = document.querySelector(".block_box_box3");
const $box4 = document.querySelector(".block_box_box4");
const $box5 = document.querySelector(".block_box_box5");
const $box6 = document.querySelector(".block_box_box6");
const $box7 = document.querySelector(".block_box_box7");
const $box8 = document.querySelector(".block_box_box8");
const $box9 = document.querySelector(".block_box_box9");

$layer.addEventListener("mousemove", (e) => {
  let x = e.layerX;
  let y = e.layerY;

  if (x > 37 && x < 108 && y > 12 && y < 100) {
    $box1.style.transform = "translate(-32px, 10px) rotate(-5deg)";
  } else if (x > 109 && x < 268 && y > 12 && y < 100) {
    $box1.style.transform = "translate(-32px ,10px) rotate(10deg)";
    $box2.style.transform = "translate(-43px, 18px) rotate(-18deg)";
  } else if(x > 315 && x < 435 && y > 12 && y < 100) {
    $box2.style.transform = "translate(-41px, 10px) rotate(6deg)";
    $box3.style.transform = 'translate(-10px, 8px) rotate(-2deg)';
  } else if(x > 436 && x < 618 && y > 14 && y < 105) {
    $box3.style.transform = 'translate(-10px, 8px) rotate(5deg)';
    $box4.style.transform = 'translate(-10px, 20px) rotate(-20deg)'
  } else if(x > 619 && x < 760 && y > 14 && y < 105){
    $box4.style.transform = 'translate(-5px, 20px) rotate(0deg)'
    $box5.style.transform = 'translate(-1px, 7px) rotate(-12deg)'
  } else if(x > 760 && 840 && y > 14 && y < 105){
    $box5.style.transform = 'translate(8px, 6px) rotate(10deg)'
  } else {
    $box1.style.transform = "translate(-32px, 0px) rotate(5deg)";
    $box2.style.transform = "translate(-43px, 8px)";
    $box3.style.transform = 'translate(-10px, 3px) rotate(3deg)'
    $box4.style.transform = 'translate(-8px, 15px) rotate(-10deg)'
    $box5.style.transform = 'translate(5px) rotate(5deg)'
  }

  if (
    (x > 37 && x < 108 && y > 12 && y < 100) ||
    (x > 95 && x < 128 && y > 101 && y < 198)
  ) {
    $box6.style.transform = "translateY(2px) rotate(-12deg)";
  } else if(x > 109 && x < 268 && y > 12 && y < 100){
    $box6.style.transform = "translateY(4px) rotate(0)";
    $box7.style.transform = "translateY(6px) rotate(4deg)";
  } else if(x > 129 && x < 220 && y > 101 && y < 198){
    $box6.style.transform = "translateY(4px) rotate(0)";
  } else if (x > 235 && x < 343 && y > 101 && y < 198) {
    $box7.style.transform = "translateY(6px) rotate(4deg)";
  } else if(x > 315 && x < 435 && y > 12 && y < 100) {
    $box7.style.transform = "translateY(4px) rotate(10deg)";
  } else if(x > 344 && x < 457 && y > 110 && y < 210) {
    $box7.style.transform = "translateY(6px) rotate(14deg)";
  } else if((x > 436 && x < 618 && y > 14 && y < 105) || (x > 474 && x < 615 && y > 106 && y < 190)) {
    $box8.style.transform = 'translateY(6px) rotate(-3deg)'
  } else if((x > 619 && x < 760 && y > 14 && y < 105) || (x > 630 && x < 715 && y > 114 && y < 192)){
    $box9.style.transform = 'translateY(4px) rotate(0deg)'
  } else if((x > 760 && 840 && y > 14 && y < 105) || (x > 716 && x < 800 && y > 114 && y < 192 )){
    $box9.style.transform = 'translateY(0px) rotate(6deg)'
  } else {
    $box6.style.transform = "translateY(0) rotate(-12deg)";
    $box7.style.transform = "rotate(12deg)";
    $box8.style.transform = 'translateY(0) rotate(-10deg)'
    $box9.style.transform = 'translateY(-2px) rotate(5deg)'
  }
});

/* scroll */
const scrollButton = (target) => {
  let targetTop = document.querySelector("." + target).offsetTop;
  window.scroll({ top: targetTop, behavior: "smooth" });
};