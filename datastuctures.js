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

function mergeLists(head1, head2) {
    let array = [];
    const iterate = (list, arr) => {
        while (list) {
            arr.push(list.data);
            list = list.next;
        }
        return arr;
    }
    let array1 = iterate(head1, []);
    let array2 = iterate(head2, []);
    let cache = 0;
    array = array1.concat(array2);
    for (let i = 0; i < array.length; i++) {
        for (let x = i; x < array.length; x++) {
            if (array[i] > array[x]) {
                cache = array[i];
                array[i] = array[x];
                array[x] = cache;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        array[i] = new SinglyLinkedListNode(array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1]) {
            array[i].next = array[i + 1];
        }
    }
    return array[0];
}

//printLinkedList(a, 'Iamatend');
addToTail(a, 'tail');

