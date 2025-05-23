// url: https://school.programmers.co.kr/learn/courses/30/lessons/42885
// 문제: 무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
// 예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.


const solution = (people, limit) => {
	people.sort((a, b) => b - a);
	console.log(people);
	let totalCount = 0;
	let right = people.length - 1;
	for (let left = 0; left <= right; left++) {
		if (people[left] + people[right] <= limit) right--;
		totalCount++;
	}
	return totalCount;
};


console.log("result:: ", solution([70, 50, 80, 50], 100)); // 3
console.log("result:: ", solution([70, 80, 50], 100)); // 3

