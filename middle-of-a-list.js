const LinkedList = require('./linked-list');


const findMiddle = list => {
	let one = list.head;
	let two = list.head;

	while( (two !== null) && (two.next !== null) ){
		two = two.next.next;
		one = one.next;
	}
	return one.value;
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

	console.log(findMiddle(SLL));
}

main();
