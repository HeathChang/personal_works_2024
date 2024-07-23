// URL > https://school.programmers.co.kr/learn/courses/30/lessons/70129

const solution = (s) => {
	let count = 0; // 2진 변환 수
	let deletedZero = 0; // 변환 과정에서 제거된 모든 0 수
	while (s !== "1") {
		deletedZero += (s.match(/0/g) || []).length; // 제거된 0의 총 개수에 추가
		s = s.replace(/0/g, ''); // 문자열에서 0을 모두 제거
		s = s.length.toString(2); // 문자열의 길이를 이진수로 변환
		count += 1; // 이진 변환 횟수 증가
	}
	return [count, deletedZero];
};

console.log("result:: ", solution('110010101001')); // [3,8]
console.log("result:: ", solution('01110')); //[3,3]
console.log("result:: ", solution('1111111')); //[4,1]
