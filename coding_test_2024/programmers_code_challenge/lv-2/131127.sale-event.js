// URL > https://school.programmers.co.kr/learn/courses/30/lessons/131127


const solution = (want, number, discount) => {
	const wantMap = new Map();
	for (let i = 0; i < want.length; i++) {
		wantMap.set(want[i], number[i]);
	}

	const n = discount.length;
	let validCount = 0;

	for (let i = 0; i <= n - 10; i++) {
		const currentWindow = discount.slice(i, i + 10);
		const discountMap = new Map();

		for (let product of currentWindow) {
			discountMap.set(product, ( discountMap.get(product) || 0 ) + 1);
		}

		let isValid = true;
		for (let [product, qty] of wantMap) {
			if (discountMap.get(product) !== qty) {
				isValid = false;
				break;
			}
		}

		if (isValid) {
			validCount++;
		}
	}

	return validCount;
};

// Example usage
const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];

console.log(solution(want, number, discount)); // Output: 3
