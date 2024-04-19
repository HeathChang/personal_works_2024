const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 원 그리기
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2 * Math.PI); // 중심 좌표 (150, 150), 반지름 100
ctx.fillStyle = 'skyblue'; // 색상 지정
ctx.fill(); // 내부를 색으로 채우기
ctx.closePath();