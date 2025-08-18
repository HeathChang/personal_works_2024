//  Map & Object 비교
//
// ```

/*
| 구분                | Object                                                       | Map                                                                         |
| ----------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------- |
| **키 타입**          | 문자열, 심볼만 가능 (숫자 넣으면 문자열로 변환됨)                                | 모든 타입 가능 (숫자, 객체, 함수 등)                                                     |
| **키 순서**          | 보장되지 않음 (최근 ECMAScript에서는 삽입 순서를 유지하는 경우 많지만, 일부 규칙적 차이가 있음) | 삽입 순서를 보장                                                                   |
| **크기 확인**         | `Object.keys(obj).length`                                    | `map.size`                                                                  |
| **반복(iteration)** | `for...in`, `Object.keys`, `Object.entries` 필요               | `map.forEach`, `map.keys`, `map.values`, `map.entries`, `for...of` 바로 사용 가능 |
| **성능**            | 소수의 키-값 쌍 관리에 적합                                             | 빈번한 삽입/삭제에 최적화                                                              |
| **프로토타입**         | 프로토타입 체인을 가지므로, `hasOwnProperty` 확인 필요                       | 순수한 key-value 저장소 (prototype 영향 없음)                                         |
| **직렬화(JSON)**     | `JSON.stringify` 지원                                          | 직접 변환해야 함 (`Object.fromEntries(map)` 등)                                     |
*/

const solution = (nums) => {
    const a = new Map();
    a.set(1, 'a');
    const b = {1: 'a'}

    console.log(1, a, b, a.get('1')) // b.get('1') error
    console.log(2, a.values(), a.keys()) // Map 인 경우 > 이렇게
    console.log(3, Object.entries(b),  Object.keys(b), Object.values(b)) // Object 인 경우 > 이렇게


};

console.log("result:: ", solution());
