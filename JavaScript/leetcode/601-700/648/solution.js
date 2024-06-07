class Trie {
  constructor() {
    this.root = new Map();
  }

  // Method to insert a word into the Trie
  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.has(char)) {
        currentNode.set(char, new Map());
      }
      currentNode = currentNode.get(char);
    }
    currentNode.set('isEnd', true);
  }

  // Method to find the shortest prefix for a given word
  findShortestPrefix(word) {
    let currentNode = this.root;
    let prefix = '';
    for (const char of word) {
      if (currentNode.has(char)) {
        prefix += char;
        currentNode = currentNode.get(char);
        if (currentNode.get('isEnd')) {
          return prefix;
        }
      } else {
        return word;
      }
    }
    return word;
  }
}

/**
* @param {string[]} dictionary
* @param {string} sentence
* @return {string}
*/

function replaceWords(dictionary, sentence) {
  const trie = new Trie();

  // Insert all words from the dictionary into the Trie
  for (const root of dictionary) {
    trie.insert(root);
  }

  // Split the sentence into words
  const words = sentence.split(' ');

  // Replace each word in the sentence with its shortest root from the Trie
  const replacedWords = words.map(word => trie.findShortestPrefix(word));

  // Join the words back into a single string
  return replacedWords.join(' ');
}