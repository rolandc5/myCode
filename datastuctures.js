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

const addToTail = (head, data) => {
    let node = new ListNode(data);
    let array = [];
    while (head) {
        array.push(head);
        head = head.next;
    }
    array.push(node);
    for (let i = 0; i < array.length; i++) {
        if (array[i+1] !== undefined) {
            array[i].next = array[i + 1];
        }
    }
    head = array[0];
    return head;
}

//printLinkedList(a, 'Iamatend');
addToTail(a, 'tail');

