const LinkedList = require('./linked-list');


const reverseLinkedList = function(list) {

	let current = list.head;
	let previous = null;
	let next = null;

	while(current !== null) {
		next = current.next;
		current.next = previous;
		previous = current;
		current = next;
	}

	console.log(JSON.stringify(previous));
	list.head = previous;
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

	const SLL = new LinkedList();

	SLL.insertLast(1);
	SLL.insertLast(2);
	SLL.insertLast(3);
	SLL.insertLast(4);

	display(SLL);
	reverseLinkedList(SLL);
	display(SLL);

}

main();