import Node from "./nodeClass";

export default class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
    }
}