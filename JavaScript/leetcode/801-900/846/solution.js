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