import LinkedList from "./linked-list.js";

const list  = new LinkedList();

list.prepend("sahil")
list.append("dog")
list.append("cat")
list.prepend("bishnoi")

console.log(list);
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(0));
console.log(list.pop());
console.log(list.size());
console.log(list.tail());
console.log(list.contains('bishnoi'));
console.log(list.find('cat'));
console.log(list.toString());

list.insertAt('poonia', 0);
console.log(list.toString());

list.removeAt(1);
console.log(list.toString());