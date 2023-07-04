export default function updateUniqueItems(newmap) {
  if (!(newmap instanceof Map)) {
    throw new TypeError('Cannot process');
  }
  newmap.forEach((val, key) => {
    if (newmap.get(key) === 1) {
      newmap.set(key, 100);
    }
  });
}
