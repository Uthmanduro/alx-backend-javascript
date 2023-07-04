export default function updateUniqueItems(newmap) {
  newmap.forEach((val, key) => {
    try {
      if (newmap.get(key) === 1) {
        newmap.set(key, 100);
      }
    } catch (error) {
      if (error.name === 'TypeError') {
        throw new TypeError('Cannot process');
      } else {
        console.error(error);
      }
    }
  });
}
