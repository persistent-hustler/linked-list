import LinkedList from "./LinkedListClass.js";

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.prepend('turtle');

console.log(`List: ${list.toString()}`, `Size: ${list.getSize()}`, `Head: ${list.getHead().value}`, `Tail: ${list.getTail().value}`, `at(2): ${list.at(2).value}`, `Contains parrot: ${list.contains('parrot')}`, `Find Snake: ${list.find('snake')}`);