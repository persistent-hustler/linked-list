import Node from "./nodeClass.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newTail = new Node(value);
        if(this.tail) {
            this.tail.nextNode = newTail;
        } else {
            this.head = newTail;
        }

        this.tail = newTail;
    }

    prepend(value) {
        const newHead = new Node(value);
        newHead.nextNode = this.head;
        this.head = newHead;
    }

    getSize() {
        let currentNode = this.head;
        let count = 0;
        while(currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }

        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    at(index) {
        let currentNode = this.head;
        let i = 0;
        while(i !== index && currentNode) {
            currentNode = currentNode.nextNode;
            i++;
        }

        return currentNode;
    }

    pop() {
        let prevNode = null;
        let currentNode = this.head;

        while(currentNode.nextNode) {
            prevNode = currentNode;
            currentNode = currentNode.nextNode;
        }

        if(prevNode) {
            prevNode.nextNode = null;
        } else {
            this.head = null;
        }

        this.tail = prevNode;
    }

    contains(value) {
        let currentNode = this.head;

        while (currentNode) {
            if(currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }

        return false;
    }

    find(value) {
        let currentNode = this.head;
        let index = 0;

        while(currentNode) {
            if(currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index++;
        }

        return null;
    }

    toString() {
        let stringResult = '';
        let currentNode = this.head;

        while(currentNode) {
            stringResult += `(${currentNode.value}) -> `;
            currentNode = currentNode.nextNode;
        }

        stringResult += 'null';

        return stringResult;
    }
}