const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// 사각형 그리기
ctx.fillStyle = 'red'; // 색상 설정
ctx.fillRect(50, 50, 100, 80); // (x, y, width, height)

// 선 그리기
ctx.strokeStyle = 'blue'; // 선 색상 설정
ctx.lineWidth = 2; // 선 두께 설정
ctx.beginPath();
ctx.moveTo(200, 50); // 시작점 설정
ctx.lineTo(300, 100); // 끝점 설정
ctx.stroke(); // 선 그리기

// 원 그리기
ctx.fillStyle = 'green'; // 색상 설정
ctx.beginPath();
ctx.arc(350, 150, 30, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
ctx.fill(); // 원 내부 채우기
/*****************************************************************************************************/
// 점 그리기
ctx.fillStyle = 'black';
ctx.fillRect(10, 10, 1, 1); // (x, y, width, height)

// 픽셀 데이터 다루기
const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
const data = imageData.data; // 픽셀 데이터 배열

// 예제: Canvas 픽셀 색상 변경
for (let i = 0; i < data.length; i += 4) {
    // 픽셀 데이터를 수정하여 색상을 반전시킵니다.
    data[i] = 255 - data[i]; // 빨강
    data[i + 1] = 255 - data[i + 1]; // 초록
    data[i + 2] = 255 - data[i + 2]; // 파랑
    // data[i + 3] (알파 값)은 변경하지 않습니다.
}

ctx.putImageData(imageData, 0, 0); // 변경된 픽셀 데이터를 Canvas에 적용