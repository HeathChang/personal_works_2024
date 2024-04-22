const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 50;
let dx = 2; // 원의 x 방향 이동 거리

function animate() {
    requestAnimationFrame(animate);

    // Canvas 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 원 그리기
    ctx.beginPath();
    ctx.arc(x, 50, 20, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();

    // x 좌표 업데이트
    x += dx;

    // Canvas 범위를 벗어나면 방향 바꾸기
    if (x > canvas.width - 20 || x < 20) {
        dx *= -1;
    }
}

// 애니메이션 시작
animate();


/***********************************************************************************************************************************/

// 1. 마우스 이벤트 감지
canvas.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    // 마우스 위치에 따라 텍스트 그리기
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(`Mouse Position: (${mouseX}, ${mouseY})`, 20, 20);
});

// 2. 키보드 이벤트 감지
document.addEventListener('keydown', function(event) {
    const key = event.key;

    // 눌린 키에 따라 동작 수행
    if (key === 'ArrowRight') {
        // 오른쪽 화살표 키를 눌렀을 때 동작
        // 원의 위치 이동 등
    }
});
