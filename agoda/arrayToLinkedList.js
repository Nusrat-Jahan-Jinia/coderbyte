class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    display() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements;
    }
}

function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (const item of arr) {
        linkedList.append(item);
    }
    return linkedList;
}

// Example usage
const array = [10, 20, 30, 40, 50];
const linkedList = arrayToLinkedList(array);
console.log(linkedList.display()); // Output: [10, 20, 30, 40, 50]