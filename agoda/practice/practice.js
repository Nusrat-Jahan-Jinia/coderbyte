class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode
        }
    }
}

function arrayToLinkedList(arr) {
    
    const linkedList = new LinkedList();

    for (const item of arr) {
        linkedList.append(item);

    }
    return linkedList
}

const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
console.log(linkedList);