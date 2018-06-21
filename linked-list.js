class _Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(value) {
		this.head = new _Node(value, this.head);
		return this.head;
	}

	insertLast(value) {
		if(!this.head) {
			this.insertFirst(value);
		}
		else {
			let current = this.head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = new _Node(value, null);
		}
	}

	insertBefore(value, key) {
		if(!this.head) {
			console.log('List is Empty');
			return null;
		}

		let toInsert = null;

		if(this.head.value === key) {
			toInsert = new _Node(value, this.head);
			this.head = toInsert;
			return toInsert;
		}

		let previous = this.head;
		let current = this.head.next;

		while(current !== null) {
			if(current.value === key) {
				toInsert = new _Node(value, current);
				previous.next = toInsert;
				return toInsert;
			}
			previous = current;
			current = current.next;
		}
		return toInsert;
	}

	insertAfter(value, key) {
		if(!this.head) {
			console.log('List is Empty');
			return null;
		}

		let current = this.head;
		let toInsert = null;

		while(current !== null) {
			if(current.value === key) {
				toInsert = new _Node(value, current.next);
				current.next = toInsert;
				return toInsert;
			}
			current = current.next;
		}
		return toInsert;
	}

	insertAt(index, value) {
		if(!this.head) {
			console.log('List is Empty');
			return null;
		}

		let count = 0;
		let current = this.head;
		let previous = null;

		while(current !== null) {
			if(count === index) {
				let toInsert = new _Node(value, current);
				previous.next = toInsert;
				return toInsert;
			}
			count++;
			previous = current;
			current = current.next;
		}
		return null;
	}

	remove(value) {
		if(!this.head) {
			return null;
		}

		// delete the first
		if(this.head.value === value) {
			this.head = this.head.next;
			console.log('removed', value);
			return;
		}

		let current = this.head;
		let previous = null;

		while((current !== null) && (current.value !== value)) {
			previous = current;
			current = current.next;
		}

		if(current === null) {
			return null;
		}

		//Delete end or middle
		previous.next = current.next;
		console.log('removed', value);
		return;
	}

	find(value) {
		if(!this.head) {
			return null;
		}

		let current = this.head;

		while(current.value !== value) {
			if(current.next === null){
				return null;
			}
			current = current.next;
		}

		return current;
	}
}

function isEmpty(list) {
	if(!list.head) {
		console.log('List is Empty');
		return true;
	}
	return false;
}

function display(list) {

	if(isEmpty(list)) {
		return;
	}

	let current = list.head;

	while(current !== null) {
		console.log(current.value);
		current = current.next;
	}
	return;
}

function size(list){
	if(isEmpty(list)) {
		return 0;
	}
	let size = 0;
	let current = list.head;
	while(current !== null) {
		current = current.next;
		size++;
	}

	return size;
}

function findPrevious(list, value) {
	if(isEmpty(list)) {
		return null;
	}

	let current = list.head;
	let previous = null;

	while(current.value !== value) {
		previous = current;
		current = current.next;
	}
	return previous.value;
}

function findLast(list) {
	if(isEmpty(list)) {
		return null;
	}

	let last = list.head;
	let current = list.head;

	while(current !== null) {
		last = current;
		current = current.next;
	}
	return last.value;
}

// function main() {
// 	const SLL = new LinkedList();

// 	isEmpty(SLL);

// 	SLL.insertLast('Apollo');
// 	SLL.insertLast('Boomer');
// 	SLL.insertLast('Helo');
// 	SLL.insertLast('Husker');
// 	SLL.insertLast('Starbuck');
// 	SLL.insertLast('Tauhida');

// 	SLL.insertBefore('Athena','Boomer');
// 	SLL.insertAfter('Hotdog','Helo');

// 	SLL.remove('Tauhida');

// 	let index = 3;
// 	SLL.insertAt(index, 'Kat');

// 	display(SLL);
// 	console.log('size:', size(SLL));

// 	console.log('Previous',findPrevious(SLL, 'Starbuck'));
// 	console.log('Last', findLast(SLL));
// }

// main();

module.exports = LinkedList;
