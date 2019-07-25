/**
 * @param {string} text
 * @param {number} count
 */
function repeat(text, count) {
  return Array(count + 1).join(text);
}

repeat("REACT JS", 10);
