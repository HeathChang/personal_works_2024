```
문제 설명:
우리는 매일 여러 개의 문서를 인쇄하는 프린터를 사용하고 있습니다. 이 프린터는 다양한 문서의 중요도를 기준으로 인쇄를 진행합니다. 문서의 중요도는 정수로 표현되며, 중요도가 높은 문서일수록 먼저 인쇄됩니다.
문서들은 대기열에 쌓여 있으며, 대기열의 가장 앞에 있는 문서부터 인쇄됩니다. 인쇄 작업을 할 때, 현재 대기열의 모든 문서 중에서 중요도가 가장 높은 문서를 찾아 그것을 인쇄합니다. 인쇄된 문서는 대기열에서 제거되며, 중요도가 같은 문서가 여러 개 있을 경우, 대기열의 순서대로 인쇄됩니다.
당신은 대기열에서 location번째에 있는 문서가 몇 번째로 인쇄되는지 알고 싶습니다. location은 0부터 시작하는 인덱스입니다.

입력:
priorities (정수 배열) : 문서들의 중요도가 담긴 배열입니다. (1 ≤ priorities.length ≤ 100, 1 ≤ priorities[i] ≤ 9)
location (정수) : 인쇄 대기열에서 몇 번째 문서의 인쇄 순서를 알고 싶은지 나타내는 정수입니다. (0 ≤ location < priorities.length)

출력:
location번째 문서가 몇 번째로 인쇄되는지 나타내는 정수입니다.
```

const solution = (priorities, location) => {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let printOrder = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        if (queue.some(doc => doc.priority > current.priority)) {
            queue.push(current);
        } else {
            printOrder++;
            if (current.index === location) {
                return printOrder;
            }
        }
    }

    return -1;
};

console.log("result:: ", solution([1, 1, 9, 1, 1, 1], 0)); // 5
console.log("result:: ", solution([2, 1, 3, 2], 2)); // 1
