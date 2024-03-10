


```
0-1 배낭 문제는 주어진 아이템들 중에서 총 무게가 배낭의 용량을 초과하지 않으면서 가치의 합이 최대가 되도록 아이템들을 선택하는 문제입니다. 이 문제는 다이나믹 프로그래밍을 사용하여 효율적으로 해결할 수 있습니다. 
    1. 아이템들은 각각 무게(weights)와 가치(values)를 가지고 있습니다.
    2. 배낭의 최대 무게 용량은 W입니다.
    3. 선택할 수 있는 아이템들의 무게와 가치, 그리고 배낭의 최대 무게가 주어졌을 때, 배낭에 담을 수 있는 아이템들의 가치의 최대 합을 찾아야 합니다.
```

const knapsack = (n) => {
    return n.split("")
};


const values = [60, 100, 120]; // 각 아이템의 가치
const weights = [10, 20, 30]; // 각 아이템의 무게
const W = 50; // 배낭의 최대 무게

console.log(knapsack(values, weights, W)); // 출력: 220

// >>>> 정답은 아래

















// function knapsack(values, weights, W) {
//   const n = values.length; // 아이템의 개수
//   const dp = Array.from({length: n + 1}, () => Array(W + 1).fill(0));
//
//   // 모든 아이템에 대해 반복
//   for (let i = 1; i <= n; i++) {
//     // 모든 가능한 무게에 대해 반복
//     for (let w = 1; w <= W; w++) {
//       // 현재 아이템을 배낭에 넣을 수 있는 경우
//       if (weights[i-1] <= w) {
//         dp[i][w] = Math.max(
//           dp[i-1][w], // 현재 아이템을 넣지 않는 경우
//           dp[i-1][w-weights[i-1]] + values[i-1] // 현재 아이템을 넣는 경우
//         );
//       } else {
//         // 현재 아이템을 배낭에 넣을 수 없는 경우
//         dp[i][w] = dp[i-1][w];
//       }
//     }
//   }
//
//   // 최대 가치 합 반환
//   return dp[n][W];
// }


