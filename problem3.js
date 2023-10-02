class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
//linkedlist initializer
function LinkedList() {
    return null;
}
//add new node to linkedlist
function addNode(head, value) {
    let tail = new ListNode(value);
    //if head is null tail is the only node in the list
    if (head === null) {
        return tail;
    }

    let node = head;

    while (node.next != null) {
        node = node.next;
    }

    node.next = tail;
}

//remove node function where greater than data
function removeNodes(head, data) {
    let current = head;
    let previous = null;
    while (current != null) {
        if (current.data > data && previous === null) {
            head = current.next;
            current = current.next;

        }
        else {
            if (current.next != null && current.next.data > data) {
                current.next = current.next.next;
                previous = current;
            }
            else {
                current = current.next;
            }
        }

    }

    return head;
}

function main() {

    let head = LinkedList(null);

    head = addNode(head, 10);
    addNode(head, 5);
    addNode(head, 12);
    addNode(head, 7);
    addNode(head, 3);
    addNode(head, 9);
    addNode(head, 10);

    head = removeNodes(head, 7);

    let node = head;
    while (node != null) {
        console.log(node.data);

        node = node.next;
    }

}

main();