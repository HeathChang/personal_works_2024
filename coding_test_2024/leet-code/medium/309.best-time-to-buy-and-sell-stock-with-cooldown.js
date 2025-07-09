// URL > https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/?envType=problem-list-v2&envId=dynamic-programming

const solution = (prices) => {
	if (!prices || prices.length <= 1) return 0;

	let hold = -prices[0];
	let sold = 0;
	let rest = 0;

	for (let i = 1; i < prices.length; i++) {
		const price = prices[i];

		const prevHold = hold;
		const prevSold = sold;
		const prevRest = rest;

		hold = Math.max(prevHold, prevRest - price);
		sold = prevHold + price;
		rest = Math.max(prevRest, prevSold);
	}

	return sold
};

console.log("result:: ", solution([1, 2, 3, 0, 2])); // 3
console.log("result:: ", solution([1])); // 0