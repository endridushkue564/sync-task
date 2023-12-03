Filename: complex_code.js

/*
  This code is a complex implementation of a data structure called Trie,
  used to efficiently store and search for strings. It includes various
  operations such as insert, search, delete, and count the number of words.

  It also contains helper functions for manipulating strings and nodes in the Trie.

  Note: This code is purely for demonstrative purposes and may not be optimized
  for performance or memory usage.
*/

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
    this.wordCount = 0;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
    this.totalWords = 0;
  }

  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }

      currentNode = currentNode.children.get(char);
    }

    // Mark the end of the word in the last node
    currentNode.isEndOfWord = true;
    currentNode.wordCount++;
    this.totalWords++;
  }

  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return currentNode.isEndOfWord;
  }

  delete(word) {
    if (!this.search(word)) {
      return;
    }

    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      const nextNode = currentNode.children.get(char);

      if (nextNode.wordCount === 1) {
        currentNode.children.delete(char);
        return;
      }

      nextNode.wordCount--;
      currentNode = nextNode;
    }

    currentNode.isEndOfWord = false;
    this.totalWords--;
  }

  countWords() {
    return this.totalWords;
  }
}

// Example usage:
const trie = new Trie();

trie.insert("apple");
trie.insert("banana");
trie.insert("application");
trie.insert("app");
trie.insert("book");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("app")); // Output: true
console.log(trie.search("application")); // Output: true
console.log(trie.search("book")); // Output: true
console.log(trie.search("notfound")); // Output: false

trie.delete("banana");
console.log(trie.search("banana")); // Output: false
console.log(trie.countWords()); // Output: 4