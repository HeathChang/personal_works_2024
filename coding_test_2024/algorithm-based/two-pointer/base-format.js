```
* 슬라이딩 윈도우(Sliding Window) 알고리즘은
> 배열이나 리스트의 요소의 일정 범위의 값을 비교할때 사용하면 유용한 알고리즘.
> 매번 처리되는 중복된 요소를 버리지 않고 재사용함으로써 낭비되는 계산을 하지 않음으로써 효율적으로 처리.
> 연속된 구간(윈도우)을 유지하며 조건 만족하는 구간 탐색이라는점에서 정렬배열에서 쌍/조합찾는 투포인터와 차이
```

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



// 예문:
console.log("result:: ", twoPointerTemplate([1, 3, 4, 6, 9], 10));
