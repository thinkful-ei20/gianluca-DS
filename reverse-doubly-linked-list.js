const DLinkedList = require('./doubly-linked-list');

const reverseDoublyLinkedList = function(list) {

	let current = list.head;
	let temp;

	while(current !== null) {
		temp = current.prev;
		current.prev = current.next;
		current.next = temp;
		current = current.prev;
	}

	// console.log(JSON.stringify(current));
	list.head = temp.prev;
};

const display = function(list) {

	if(!list.head) {
		return;
	}

	let current = list.head;

	while(current !== null) {
		console.log(current.value);
		current = current.next;
	}
	return;
};

function main() {

	const DLL = new DLinkedList();

	DLL.insertLast(1);
	DLL.insertLast(2);
	DLL.insertLast(3);
	DLL.insertLast(4);

	display(DLL);
	reverseDoublyLinkedList(DLL);
	display(DLL);

}

main();