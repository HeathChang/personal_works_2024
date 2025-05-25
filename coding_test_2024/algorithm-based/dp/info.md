# 🧠 동적 계획법(Dynamic Programming, DP) - JavaScript로 배우기

## 📌 동적 계획법이란?

동적 계획법(Dynamic Programming, DP)은 **복잡한 문제를 작은 하위 문제로 나누어 푸는 방법**입니다. 이미 해결한 하위 문제의 결과를 저장해두고 **중복 계산을 피함**으로써 전체 문제의 효율성을 높이는 알고리즘 설계 기법입니다.

- **탑다운(top-down)**: 재귀 + 메모이제이션
- **바텀업(bottom-up)**: 반복문 + 테이블 채우기

---

## 🏗️ DP 알고리즘 구성 방식

### 1. **문제 정의**
- 최적 부분 구조(Optimal Substructure)가 존재하는지 확인
- 중복되는 하위 문제가 존재하는지 확인

### 2. **하위 문제 정의**
- 예: `dp[i] = i번째까지의 최적의 해`

### 3. **점화식(관계식) 도출**
- 예: `dp[i] = dp[i - 1] + dp[i - 2]`

### 4. **초기값 설정**
- 예: `dp[0] = 0`, `dp[1] = 1`

### 5. **탑다운 or 바텀업 방식으로 구현**

---

## 📘 예제: 피보나치 수열

### ✅ 탑다운 방식 (메모이제이션)

```js
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(10)); // 55
```

### ✅ 바텀업 방식 (반복문)

```js
function fib(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
```