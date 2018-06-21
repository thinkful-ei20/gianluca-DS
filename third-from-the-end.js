const LinkedList = require('./linked-list');

const thirdFromTheEnd = list => {

	let current = list.head;

	if(!current.next.next.next) {
		return null;
	}

	let tfl = current;

	while(current.next.next.next !== null) {
		tfl = current;
		current = current.next;
	}
	return tfl.value;
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
	SLL.insertLast(5);
	SLL.insertLast(6);
	SLL.insertLast(7);
	SLL.insertLast(8);

	display(SLL);

	console.log('Third from the last: ',thirdFromTheEnd(SLL));
}

main();