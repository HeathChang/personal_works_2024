// URL > https://leetcode.com/problems/coin-change/description/?envType=study-plan-v2&envId=top-interview-150

const solution = (coins, amount) => {
    // 1st att
	// if (amount === 0) return 0;
	// if (coins.length === 1 && coins[0] > amount) return -1;
    //
	// const dp = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
	// dp[0] = 0;
	// for (let coin of coins) {
	// 	for (let i = coin; i <= amount; i++) {
	// 		dp[i] = Math.min(dp[i], dp[i - coin] + 1);
	// 	}
	// }
	// return dp[amount] === Number.MAX_SAFE_INTEGER ? -1 : dp[amount];



};

console.log("result:: ", solution([1, 2, 5], 11)); // 3
console.log("result:: ", solution([2], 3)); // -1
console.log("result:: ", solution([1], 0)); // 0


