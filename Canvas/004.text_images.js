const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');



// 텍스트 그리기
ctx.font = '24px Arial'; // 폰트 설정
ctx.fillStyle = 'white'; // 텍스트 색상 설정
ctx.fillText('Hello, Canvas!', 50, 50); // (텍스트, x, y)


// 폰트 스타일 설정
ctx.font = 'bold 36px Times New Roman'; // 굵은체, 크기 설정
ctx.fillStyle = 'red'; // 텍스트 색상 설정
ctx.fillText('Styled Text!', 100, 100); // (텍스트, x, y)

const img = new Image();
img.src = 'https://source.unsplash.com/random/300×300'; // 이미지 경로

img.onload = function() {
    // 이미지 그리기
    ctx.drawImage(img, 50, 50, 200, 150); // (이미지, x, y, width, height)
};
