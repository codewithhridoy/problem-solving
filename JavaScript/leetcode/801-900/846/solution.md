# [846. Hand of Straights](https://leetcode.com/problems/hand-of-straights/description)

---

title: "Intuition and Approach to Solve 'isNStraightHand' Problem"
summary: "This article provides a detailed explanation and approach to solving the 'isNStraightHand' problem, including time and space complexity analysis."
date: "2024-06-06"
modified_date: "2024-06-06"
tags: ["algorithm", "javascript", "coding problem", "leetcode"]
slug: "intuition-and-approach-to-solve-isnstraighthand-problem"

---

![image.png](https://assets.leetcode.com/users/images/1a60308f-faf0-4714-a44c-97906c046ad2_1717639006.4350357.png)

# Intuition

To determine if a given hand can be rearranged into groups of consecutive cards of a specified size, we need to ensure that each group contains exactly `groupSize` number of cards and all cards within the group form a straight sequence. The problem can be likened to checking if we can partition the list into several continuous subsequences.

# Approach

1. **Initial Check:** If the total number of cards in hand is not a multiple of `groupSize`, return false immediately as it is impossible to partition the cards into groups of the desired size.
2. **Frequency Count:** Use a hashmap to count the occurrences of each card.
3. **Sorting:** Extract the unique cards from the hashmap and sort them.
4. **Group Formation:** Iterate through the sorted unique cards. For each card, if its frequency is greater than zero, attempt to form a group starting from this card and extending for `groupSize` consecutive cards. If at any point, a required card is not available in the needed quantity, return false.
5. **Frequency Update:** Decrease the frequency of cards used to form each group.

# Complexity

- **Time complexity:** $$(O(n log n))$$, where \(n\) is the number of cards in the hand. The primary contributors to this complexity are sorting the unique cards and iterating through the cards to form groups.
- **Space complexity:** $$(O(n))$$ due to the additional storage required for the frequency hashmap.

# Code

```javascript
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
function isNStraightHand(hand, groupSize) {
  if (hand.length % groupSize !== 0) return false;

  const count = new Map();

  // Count the frequency of each card
  for (let card of hand) {
    count.set(card, (count.get(card) || 0) + 1);
  }

  const uniqueCards = Array.from(count.keys()).sort((a, b) => a - b);

  for (let card of uniqueCards) {
    if (count.get(card) > 0) {
      const freq = count.get(card);
      for (let i = 0; i < groupSize; i++) {
        const currentCard = card + i;
        if ((count.get(currentCard) || 0) < freq) {
          return false;
        }
        count.set(currentCard, count.get(currentCard) - freq);
      }
    }
  }

  return true;
}
```
