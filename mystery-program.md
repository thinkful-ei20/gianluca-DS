# Mystery Program

~~~~ javascript
function WhatDoesThisProgramDo(lst){
    let current = lst.head;
    while(current !== null){
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else{
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
~~~~

This block of code trys to remove all duplicate values within a linked list. The function
checks the value of one node against that of all the others, removes all duplicates, and then 
repeats this process for all n nodes.

Worst case, the list contains no duplicates, so the input size will always be n and the algorithm will have to check
n * n - 1 elements.

Therefore, the Big-O complexity of this algorithm is O(n^2)
