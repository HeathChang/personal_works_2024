// URL > https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150

const solution = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if the current price is lower
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        // Calculate the profit if we sold at the current price
        else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
};

console.log("result:: ", solution([7,1,5,3,6,4])); // 5
console.log("result:: ", solution([7,6,4,3,1])); // 0