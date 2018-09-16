'use strict'

const DrawArea = ( < canvas className = "draw_area" > </canvas>);

const scale = 25;

ReactDOM.render(DrawArea, document.querySelector('.container'));

const canvas = document.querySelector('.draw_area');
const ctx = canvas.getContext("2d");

const drawPicture = (pictureData) => {
pictureData.forEach(item => {
ctx.beginPath();
ctx.fillStyle = item.color;
ctx.fillRect(item.x * scale, item.y * scale, scale, scale);
ctx.closePath();
})
}

const pictureParse = (picture) => {
const result = [];
let w = 0,
h = 0;
picture.forEach((row, indexY) => {
row.split("").forEach((color, indexX) => {
  w > indexX * scale ? w = w : w = indexX * scale;
  h > indexY * scale ? h = h : h = indexY * scale;
  if (getColor(color)) {
    result.push({
      x: indexX,
      y: indexY,
      color: getColor(color)
    })
  }
})
})
canvas.width = w + scale;
document.querySelector('.container').style.width = `${canvas.width}px`;
canvas.height = h + scale;
return result;
}

function getColor(colorId) {
  switch (colorId) {
    case 'r':
      return 'red';
    case 'y':
      return 'yellow';
    case 'g':
      return 'grey';
    case 'b':
      return 'blue';
}
}

const ironMan = [
"-------rrr-------",
"----rrrrrrrrr----",
"---rrrrrrrrrrr---",
"--ryyrrrrrrryyr--",
"--ryyrrrrrrryyr--",
"--ryyyrrrrryyyr--",
"-rgyyyyyyyyyyygr-",
"-rgggggggggggggr-",
"-ry---ggggg---yr-",
"-ryyyyyyyyyyyyyr-",
"--ryyyyyyyyyyyr--",
"--ryyyyyyyyyyyr--",
"---ryygggggyyr---",
"----ggyyyyygg----",
"----ggrrrrrgg----",
"---rrrgggggrrr---",
"--rrrrgbbbgrrrr--",
"-rrrgrggbggrgrrr-",
"yyyygrrgggrrgyyyy",
"rrrygrrrgrrrgyrrr",
"-rr-grrrrrrrg-rr-",
"---yyyrrrrryyy---",
"---rryygggyyrr---",
"--rrrrr---rrrrr--",
"--rrrrr---rrrrr--",
"--rrrrr---rrrrr--",
"---bbb-----bbb---",
"---bbb-----bbb---",
"---bbb-----bbb---"
];

drawPicture(pictureParse(ironMan));