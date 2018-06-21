class _Node{
	constructor(value, next, prev) {
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}

class DLinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(value) {
		this.head = new _Node(value, null, null);
		return this.head;
	}

	insertLast(value) {
		if(!this.head){
			this.insertFirst(value);
		} else {

			let current = this.head;
			let previous = null;

			while(current !== null) {
				previous = current;
				current = current.next;
			}

			current = new _Node(value, null, previous);
			previous.next = current;
		}
	}

	insertBefore(value, key) {
		if(!this.head) {
			return null;
		}

		let toInsert = null;

		if(this.head.value === key) {
			toInsert = new _Node(value, this.head, null);
			this.head.prev = toInsert;
			return toInsert;
		}

		let previous = this.head;
		let current = this.head.next;

		while(current !== null) {
			if(current.value === key) {
				console.log('match!');
				toInsert = new _Node(value, current, previous);
				previous.next = toInsert;
				current.prev = toInsert;
				return toInsert;
			}
			previous = current;
			current = current.next;
		}
		return toInsert;
	}

	insertAfter(value, key) {
		if(!this.head) {
			return null;
		}

		let toInsert = null;
		let current = this.head;

		while(current !== null) {
			if(current.value === key) {
				toInsert = new _Node(value, current.next, current);
				current.next = toInsert;
				current.next.prev = toInsert;
			}
			current = current.next;
		}
		return toInsert;
	}

	insertAt(index, value) {
		if(!this.head) {
			return null;
		}

		let count = 0;
		let current = this.head;
		let previous = null;
		let toInsert = null;

		while(current !== null) {
			previous = current.prev;
			if(count === index) {
				toInsert = new _Node(value, current, previous);
				previous.next = toInsert;
				current.prev = toInsert;
			}
			count++;
			current = current.next;
		}
		return toInsert;
	}

	remove(value) {
		if(!this.head) {
			return null;
		}

		// delete the first
		if(this.head.value === value) {
			this.head = this.head.next;
			this.head.prev = null;
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
		current.prev = previous;
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
		return current.value;
	}
}

const isEmpty = list => {
	if(!list.head) {
		console.log('List is Empty');
		return true;
	}
};

const display = list => {

	if(isEmpty(list)) {
		return;
	}

	let current = list.head;

	while(current!==null) {
		console.log(current.value);
		current = current.next;
	}
	return;
};

function main() {
	const DLL = new DLinkedList();

	//isEmpty(DLL);

	DLL.insertLast('Aquaria');
	DLL.insertLast('Caprica');
	DLL.insertLast('Gemenon');
	DLL.insertLast('Picon');
	DLL.insertLast('Sagittaron');

	DLL.insertBefore('Abraham Lincoln','Gemenon');
	DLL.insertAfter('The Jackson 5', 'Abraham Lincoln');

	let index = 2;
	DLL.insertAt(index, 'Tauron');
	DLL.remove('Picon');

	display(DLL);

	console.log('Found:',DLL.find('Tauron'));

}

main();