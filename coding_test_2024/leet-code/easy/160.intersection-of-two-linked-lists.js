// URL > https://leetcode.com/problems/intersection-of-two-linked-lists/description/

const solution = (headA, headB) => {
	let tempA = headA;
	let tempB = headB;

	while (tempA !== tempB) {
		tempA = tempA === null ? headB : tempA.next;
		tempB = tempB === null ? headA : tempB.next;
	}

	return tempA === tempB ? tempA : null;


};

console.log("result:: ", solution([1, 9, 1, 2, 4], [3, 2, 4])); // 2