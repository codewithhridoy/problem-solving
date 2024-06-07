# [648. Replace Words](https://leetcode.com/problems/replace-words/description)

---

title: "Implementing a Trie for Word Replacement"
summary: "This guide demonstrates how to implement a Trie data structure to efficiently replace words in a sentence with their shortest root forms from a given dictionary."
date: 2024-06-07
modifiedDate: 2024-06-07
tags: ["Trie", "JavaScript", "Algorithms", "Data Structures"]
slug: "implementing-a-trie-for-word-replacement"

---

![image.png](https://assets.leetcode.com/users/images/558670a2-3bd5-47a4-9193-96b379041478_1717734169.8630176.png)

# Implementing a Trie for Word Replacement

This guide demonstrates how to implement a Trie data structure to efficiently replace words in a sentence with their shortest root forms from a given dictionary.

## Intuition

To solve this problem, we need a way to quickly find and replace words in a sentence with their shortest root forms from a dictionary. Using a Trie data structure allows us to efficiently perform prefix searches, making it an ideal choice for this task.

## Approach

1. **Initialize the Trie**: Start by creating a Trie data structure.
2. **Insert Words into the Trie**: Insert all the words from the dictionary into the Trie.
3. **Replace Words in the Sentence**: For each word in the sentence, find its shortest prefix in the Trie and replace it.

## Complexity

- **Time complexity**:
  The time complexity for inserting each word into the Trie is $$O(k)$$, where $$k$$ is the length of the word. Finding the shortest prefix for each word in the sentence takes $$O(k)$$ time. Therefore, for a dictionary of size $$n$$ and a sentence of size $$m$$, the overall time complexity is $$O(n \cdot k + m \cdot k)$$.

- **Space complexity**:
  The space complexity is $$O(n \cdot k)$$ for storing the Trie, where $$n$$ is the number of words in the dictionary and $$k$$ is the length of the longest word.

## Code

```javascript
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
    currentNode.set("isEnd", true);
  }

  // Method to find the shortest prefix for a given word
  findShortestPrefix(word) {
    let currentNode = this.root;
    let prefix = "";
    for (const char of word) {
      if (currentNode.has(char)) {
        prefix += char;
        currentNode = currentNode.get(char);
        if (currentNode.get("isEnd")) {
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
  const words = sentence.split(" ");

  // Replace each word in the sentence with its shortest root from the Trie
  const replacedWords = words.map((word) => trie.findShortestPrefix(word));

  // Join the words back into a single string
  return replacedWords.join(" ");
}
```
