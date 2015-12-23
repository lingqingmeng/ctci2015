function Node(value) {
	this.value = value;
	this.next = null; //while implemented, these would be references to other nodes that are next or prev to this one
	this.prev = null;
}

//base case head and tail is null because
//do we always construct it with default constructor?
function DoublyLinkedList() {
	this.len = 0; //dont use length
	this.head = null;
	this.tail = null;
}

DoublyLinkedList.prototype = {
	add: function (data){
		/** STEP 1 **/
		var node = new Node(data);

		/** STEP 2 **/
		//list is empty aka len = 0
		if (this.len == 0) {
			this.head = node;
			this.tail = node; //why do we need to set tail as node?
		}
		//list is non-empty
		else {
			//attach to the tail node
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node
		}

		/** STEP 3 **/
		this.len++;
	},

	addNode: function (node) {
		if (this.len == 0) {
			this.head = node;
			this.tail = node; //why do we need to set tail as node?
		}
		//list is non-empty
		else {
			//attach to the tail node
			this.tail.next = node;
			node.prev = this.tail;
			this.tail = node
		}

		/** STEP 3 **/
		this.len++;
	},

	searchNodeAt: function(position){
		var currNode = this.head;
		var _len = this.len;
		var count = 1;
		var msg = "node doesn't exist";

		//error check
		if (length === 0 || position < 1 || position > _len){
			throw new Error(msg);
		} 

		//valid position
		while (count < position) {
			currNode = currNode.next;
			count++
		}
		return currNode;
	},

	moveNodeToHead: function (position) {
		var currNode = this.searchNodeAt(position);
		currNode.prev.next = currNode.next;
		currNode.next = this.head;
		this.head.prev = currNode;
		//remove head of list make it the new tail
	}
}

function LRUCache (cacheSize) {
	this.dll = new DoublyLinkedList();
	this.pageMap = {};
	this.cacheSize = cacheSize;

}

LRUCache.prototype = {
	accessPage: function (n) {
		var pageNode = new Node(0);
		if (typeof this.pageMap[n] !== 'undefined') {
			pageNode = this.pageMap[n];
			//TODO: impl movePageToHead
		}
	}
}




//Testing in console log
var dll = new DoublyLinkedList();
for (var i = 0; i < 5; i++){
	dll.add(i);
}

console.log('dll: ',dll);

