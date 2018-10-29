const ListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

let a = new ListNode('foo');
let b = new ListNode('bar');
let c = new ListNode('foorBar');


a.next = b;
b.next = c;

function printLinkedList(head) {
    let node = head;
    while(node !== null) {
        console.log(node.data);
        node = node.next;
    }
}

const addToTail = (head, data) {
    
}

printLinkedList(a, 'done');
