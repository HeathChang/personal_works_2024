// Node 정의
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

// LinkedList 정의
class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}

	// 노드 추가 (append)
	append = (value) => {
		const newNode = new Node(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) current = current.next;
			current.next = newNode;
		}

		this.length++;
	};

	// 노드 삭제 (by value)
	remove = (value) => {
		if (!this.head) return;

		if (this.head.value === value) {
			this.head = this.head.next;
			this.length--;
			return;
		}

		let current = this.head;
		while (current.next && current.next.value !== value) {
			current = current.next;
		}

		if (current.next) {
			current.next = current.next.next;
			this.length--;
		}
	};

	// 값 찾기
	find = (value) => {
		let current = this.head;
		while (current) {
			if (current.value === value) return current;
			current = current.next;
		}
		return null;
	};

	// 전체 출력
	print = () => {
		let current = this.head;
		const values = [];
		while (current) {
			values.push(current.value);
			current = current.next;
		}
		console.log(values.join(" -> "));
	};
}

// 사용 예시
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);

list.print(); // 10 -> 20 -> 30

list.remove(20);
list.print(); // 10 -> 30

console.log(list.find(30)); // Node { value: 30, next: null }

