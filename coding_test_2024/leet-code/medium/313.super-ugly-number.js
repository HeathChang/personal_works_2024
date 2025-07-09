// URL > https://leetcode.com/problems/super-ugly-number/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (n, primes) => {
	const ugly = [1];
	const idx = Array(primes.length).fill(0);
	const values = [...primes];

	while (ugly.length < n) {
		const nextUgly = Math.min(...values);
		ugly.push(nextUgly);

		for (let i = 0; i < values.length; i++) {
			if (values[i] !== nextUgly) continue;
			idx[i]++;
			values[i] = primes[i] * ugly[idx[i]];
		}
	}
	return ugly[n - 1];

};

console.log("result:: ", solution(12, [2, 7, 13, 19])); // 32
// console.log("result:: ", solution(1, [2,3,5])); // 1
