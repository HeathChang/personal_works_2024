const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 경로 그리기 시작
ctx.beginPath();

// 직선 그리기
ctx.moveTo(50, 50); // 시작점
ctx.lineTo(150, 50); // 선 그리기

// 곡선 그리기 (베지어 곡선)
ctx.quadraticCurveTo(200, 50, 200, 100); // 제어점, 끝점
ctx.bezierCurveTo(200, 150, 300, 150, 300, 100); // 제어점1, 제어점2, 끝점

// 원 그리기
ctx.arc(200, 100, 30, 0, Math.PI * 2); // (x, y, radius, startAngle, endAngle)

// 경로 그리기 스타일 설정
ctx.fillStyle = 'lightblue';
ctx.fill(); // 내부를 색으로 채우기

/*************************************************************************************/


// 베지어 곡선 그리기
ctx.beginPath();
ctx.moveTo(50, 50); // 시작점
ctx.bezierCurveTo(100, 100, 150, 0, 200, 50); // 제어점1, 제어점2, 끝점
ctx.strokeStyle = 'white';
ctx.lineWidth = 2;
ctx.stroke(); // 곡선 그리기