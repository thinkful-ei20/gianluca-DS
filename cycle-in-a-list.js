const LinkedList = require('./linked-list');

const cycleInList = list => {
	let one = list.head;
	let two = list.head;

	while( (two !== null) && (two.next !== null) ) {
		two = two.next.next;
		one = one.next;
		if(two.value === one.value) {
			return true;
		}
	}
	return false;
};


function main() {
	const SLL = new LinkedList;

	SLL.insertLast(1);
	SLL.insertLast(2);
	SLL.insertLast(3);
	SLL.insertLast(4);
	SLL.insertLast(5);
	SLL.insertLast(6);
	SLL.insertLast(7);
	SLL.insertLast(8);
	SLL.insertLast(9);

	/* Uncomment lines below to add a cycle */

	// const node = SLL.find(6);
	// node.next = SLL.find(1);

	console.log('Has cycle?',cycleInList(SLL));
}

main();