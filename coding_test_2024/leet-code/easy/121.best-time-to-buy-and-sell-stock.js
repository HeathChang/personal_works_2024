// URL > https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

const solution = (prices) => {
	let minPrice = Number.MAX_SAFE_INTEGER;
	let maxProfit = 0;
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) minPrice = prices[i];
		else if (maxProfit < prices[i] - minPrice) maxProfit = prices[i] - minPrice;
	}
	return maxProfit;
};

console.log("result:: ", solution([7, 1, 5, 3, 6, 4])); // 5
console.log("result:: ", solution([7, 6, 4, 3, 1])); // 0
console.log("result:: ", solution([2, 4, 1])); // 2