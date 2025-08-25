
const  solution = (point, polygon)  => {
	const [x, y] = point;
	let inside = false;

	for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
		const [xi, yi] = polygon[i];
		const [xj, yj] = polygon[j];

		const intersect =
			yi > y !== yj > y &&
			x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;

		if (intersect) inside = !inside;
	}

	return inside;
}

// 예시 사용
const polygon = [
	[0, 0],
	[10, 0],
	[10, 10],
	[0, 10]
];

console.log(solution([5, 5], polygon)); // true (내부)
console.log(solution([15, 5], polygon)); // false (외부)
