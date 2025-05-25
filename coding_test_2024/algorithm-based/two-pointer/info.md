# 슬라이딩 윈도우와 투 포인터 기본 개념 및 예제

---

## 슬라이딩 윈도우(Sliding Window) 알고리즘

- 배열이나 리스트의 요소 중 **일정 범위의 값을 비교할 때** 유용한 알고리즘입니다.
- 매번 처리되는 중복된 요소를 버리지 않고 재사용하여, 낭비되는 계산을 줄여 효율적으로 처리합니다.
- **연속된 구간(윈도우)을 유지**하며 조건을 만족하는 구간을 탐색한다는 점에서,
    - 정렬된 배열에서 쌍이나 조합을 찾는 투 포인터와는 차이가 있습니다.

---

## 투 포인터(Two Pointer) 기본 템플릿 (정렬된 배열에서 사용)

```js
const twoPointerTemplate = (arr, target) => {
  // 배열 정렬 (필수: 투 포인터는 정렬된 배열에서 사용됨)
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      // 정답 조건에 맞는 경우
      return [arr[left], arr[right]];
    } else if (sum < target) {
      // 더 큰 합을 만들기 위해 왼쪽 포인터 이동
      left++;
    } else {
      // 더 작은 합을 만들기 위해 오른쪽 포인터 이동
      right--;
    }
  }

  return null; // 찾는 값이 없는 경우
}

console.log("result:: ", twoPointerTemplate([1, 3, 4, 6, 9], 10));
```