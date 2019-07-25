// @ts-check

/**
 * Repeats a given string a certain number of times.
 *
 * @param {string} text - Text to repeat
 * @param {number} count - Number of times
 */
function repeat(text, count) {
  return Array(count + 1).join(text);
}

repeat("REACT JS", 10);
